import React, { useState } from "react"

function DogFilter({setGoodDogs}) {

    const [filter,setFilter] = useState("OFF")
    function handlefilterClick() {
        setGoodDogs(prevState => !prevState)
        if (filter==="OFF") setFilter("ON")
        if (filter==="ON") setFilter("OFF")
    }
    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={handlefilterClick}>Filter good dogs: {filter}</button>
        </div>
    )
}

export default DogFilter