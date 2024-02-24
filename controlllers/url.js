import { URL } from "../models/url_model.js";

const createShortURL = async (req, res) => {
    try {
        const { originalURL } = req.body;

        if (!originalURL) {
            return res.status(400).json({ message: "URL is required" });
        }

        const urlID = Math.random().toString(36).substr(2, 5);

        const generateNewShorURL = await URL.create({
            urlID,
            originalURL,
            info:[]
        });

        return res.status(201).json({ generateNewShorURL });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const loadShortURL = async (req, res) => {
    try {
        const { urlID } = req.params;

        if(!urlID){
            return res.status(400).json({ message: "URL ID is required" });
        }

        const getURL = await URL.findOneAndUpdate({
            urlID,
        },{
            $push:{
                info: {
                    timeStamp: new Date().toISOString()
                }
            }
        });

        if(!getURL){
            return res.status(404).json({ message: "URL not found" });
        }

        return res.redirect(getURL.originalURL);

    } catch (error) {
        res.status(500).json({ data: error.message });
    }
};

export { createShortURL, loadShortURL };