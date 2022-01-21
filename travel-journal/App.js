import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "./data"

export default function App() {
  const cardData = Data.map( item => {
        return (
            <Card 
                title={item.title}
                location={item.location}
                googleMapsUrl={item.gooleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageUrl={item.imageUrl}
           />
        )}) 
              
    return (
        <>
            <Navbar />
            {cardData}
        </>
    )
}