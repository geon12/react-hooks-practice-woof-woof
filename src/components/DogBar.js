import React from "react"
import DogSpan from "./DogSpan"

function DogBar({dogs,setChosenDog}) {

    function handleDogClick(dog) {
        setChosenDog(dog)
    }

    function populateDogBar() {
        return dogs.map((dog) => <DogSpan key={dog.id} dog={dog} handleDogClick={handleDogClick}/>)
    }
    return (
        <div id="dog-bar">
            {populateDogBar()}
        </div>
    )
}

export default DogBar