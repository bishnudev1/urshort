import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [inputUrl, setInputUrl] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');

  const shortenUrl = async() => {
    if (!inputUrl) {
      console.log('Please enter a URL to shorten');
      
      toast.error('Please enter a URL to shorten');
      return;
    }

    const resp = await axios.post('http://localhost:8000/create-url', {
      originalURL: inputUrl
    });

    const data = resp.data;

    console.log('resp', data.generateNewShortURL["urlID"]);

    if(resp.status === 201) {
      setGeneratedUrl(`http://localhost:8000/url/${data.generateNewShortURL["urlID"]}`);
      toast.success('URL shortened successfully');
    }
    else{
      toast.error('Failed to shorten URL');
    }

    // setGeneratedUrl(resp.data.shortUrl);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedUrl).then(() => {
      toast.success('URL copied to clipboard');
    }, () => {
      toast.error('Failed to copy URL to clipboard');
    });
  };

  return (
    
    <div className="App">
      <h1>Free URL Shortener</h1>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter URL to shorten" 
          value={inputUrl} 
          onChange={(e) => setInputUrl(e.target.value)} 
        />
        <button onClick={() => shortenUrl()}>Shorten URL</button>
      </div>
      {generatedUrl && (
        <div className="generated-url">
          {generatedUrl}
          <button className="copy-button" onClick={copyToClipboard}>Copy</button>
        </div>
      )}
    <Toaster
  position="top-center"
  reverseOrder={false}
/>


    </div>
  );
}

export default App;
