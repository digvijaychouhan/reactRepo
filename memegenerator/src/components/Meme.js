import {useState}  from "react";
import memedata from "../memesData";

export default function Meme() {
    
    // const [memeImage, setMemeImage] = useState("");
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState(memedata);

    function memeGenerator () {
        const memesArray = allMemeImages.data.memes; 
        const randomNumber = Math.floor(Math.random() * (memesArray.length));
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => {
            return ({
                ...prevMeme,
                randomImage: url
            });
        } );
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="form--input"
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="form--input"
                />
                
                <button 
                    className="form--button"
                    onClick={memeGenerator}
                >
                    Get a new meme image  🖼
                </button>
            </div>           

            <img src={meme.randomImage} alt="" className="meme--image" />
        </main>
    )
}