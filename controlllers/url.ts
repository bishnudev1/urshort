import { Request, Response } from "express";
import { URL, URLDocument } from "../models/url_model";

const createShortURL = async (req: Request, res: Response) => {
    try {
        const { originalURL } = req.body;

        if (!originalURL) {
            return res.status(400).json({ message: "URL is required" });
        }

        const urlID = Math.random().toString(36).substr(2, 5);

        const generateNewShortURL = new URL({
            urlID,
            originalURL,
            info: []
        });

        return res.status(201).json({ generateNewShortURL });

    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
};

const loadShortURL = async (req: Request, res: Response) => {
    try {
        const { urlID } = req.params;

        if (!urlID) {
            return res.status(400).json({ message: "URL ID is required" });
        }

        const getURL = await URL.findOneAndUpdate<URLDocument>(
            { urlID },
            {
                $push: {
                    info: {
                        timeStamp: new Date().toISOString()
                    }
                }
            }
        );

        if (!getURL) {
            return res.status(404).json({ message: "URL not found" });
        }

        return res.redirect(getURL.originalURL);

    } catch (error:any) {
        res.status(500).json({ data: error.message });
    }
};

export { createShortURL, loadShortURL };
