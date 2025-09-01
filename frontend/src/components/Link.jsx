import React, { useState } from 'react'
import './Link.css'

const Link = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("");
  const handleChange = (e) => {
    seturl(e.target.value)
  }

  const handleclick = () => {
     if (url.trim() === "") {
     
      alert("Please enter a valid URL");
     }
      
      const fakeurl = "https://short.url/" + Math.random().toString(36).substring(7);
      setshorturl(fakeurl);
      alert("Shortened URL: " + fakeurl);
      seturl("");
    }
const handlecopy = () => {
  navigator.clipboard.writeText(shorturl);
  alert("copied to clipboard: " + shorturl);
  }

  return (
    <div className='link-container'>
      <div className='link'>
        <input
          className="inputbox"
          type="text"
          placeholder="Enter URL here"
          value={url}
          onChange={handleChange}
        />
        <button onClick={handleclick} className='btn'>
          Shorten
        </button>
      </div>
        {shorturl && (
            <div className='result'>
                <p className='short-url'>Shortened URL: <a href={shorturl} >{shorturl}</a></p>
                <button onClick={handlecopy} className='copy-btn'>Copy</button>
            </div>
        )}
    </div>
  )
}

export default Link
