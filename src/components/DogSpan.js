import React from "react"

function DogSpan({dog,handleDogClick}) {
    function onDogClick() {
        handleDogClick(dog)
    }
    return (
        <span onClick={onDogClick}>
            {dog.name}
        </span>

    )

}

export default DogSpan