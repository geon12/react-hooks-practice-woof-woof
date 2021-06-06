import React, { useState } from "react"

function DogInfo({dog,toggleGoodDog}) {
    const [goodOrBad,setGoodOrBad] = useState(dog.isGoodDog ? "Bad Dog!" : "Good Dog!")
    function handleDogInfoClick() {
        setGoodOrBad(dog.isGoodDog ? "Good Dog!" : "Bad Dog!")
        toggleGoodDog(dog) 
    }
    return (
        <div>
            <img src={dog.image} alt={dog.name}/>
            <h2>{dog.name}</h2>
            <button onClick={handleDogInfoClick}>{goodOrBad}</button>
        </div>
    )
}

export default DogInfo