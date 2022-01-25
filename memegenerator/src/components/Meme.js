import memedata from "../memesData"

export default function Meme() {
    function memeGenerator () {
        const memesArray = memedata.data.memes; 
        const randomNumber = Math.floor(Math.random() * (memesArray.length));
        const getUrl = memesArray[randomNumber].url;
        console.log(getUrl);
    }

    return (
        <main className="form">
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
            
        </main>
    )
}