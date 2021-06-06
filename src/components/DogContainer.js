import React from "react"
import DogInfo from "./DogInfo"

function DogContainer({chosenDog,toggleGoodDog}) {


    function addChosenDog(){
        if(chosenDog) return <DogInfo dog={chosenDog} toggleGoodDog={toggleGoodDog}/>
    }

    return (

        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                {addChosenDog()}
            </div>
        </div>

    )
}


export default DogContainer