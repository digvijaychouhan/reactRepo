import {useState}  from "react";
import memedata from "../memesData";

export default function Meme() {
    
    const [memeImage, setMemeImage] = useState("");
    
    function memeGenerator () {
        const memesArray = memedata.data.memes; 
        const randomNumber = Math.floor(Math.random() * (memesArray.length));
        setMemeImage(memesArray[randomNumber].url);
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Shut up" 
                    className="form--input"
                />
                <input 
                    type="text" 
                    placeholder="and take my money" 
                    className="form--input"
                />
                
                <button 
                    className="form--button"
                    onClick={memeGenerator}
                >
                    Get a new meme image  🖼
                </button>
            </div>           

            <img src={memeImage} alt="" className="meme--image" />
        </main>
    )
}