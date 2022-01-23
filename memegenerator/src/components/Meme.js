export default function Meme() {
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
            
            <button className="form--button">Get a new meme image  🖼</button>
        </main>
    )
}