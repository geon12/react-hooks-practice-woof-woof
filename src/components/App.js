import React, { useEffect, useState } from "react";
import DogBar from "./DogBar"
import DogContainer from "./DogContainer"
import DogFilter from "./DogFilter"

function App() {
  const [dogs, setDogs] = useState([])
  const [goodDogs,setGoodDogs] = useState(false)
  const [chosenDog,setChosenDog] = useState(null)
  const BASE_URL = 'http://localhost:3001/pups'

  function filterDogs() {
    if (goodDogs) return dogs.filter((dog) => dog.isGoodDog)
    return dogs
  }

  function toggleGoodDog(changedDog) {
    const configObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({isGoodDog: !changedDog.isGoodDog})
    }
    
    fetch(`${BASE_URL}/${changedDog.id}`,configObj)
      .then(resp => resp.json())
      .then( (resp) => {
        const updatedDogs = dogs.map( (dog) => {
          if (dog.id===changedDog.id) return resp
          return dog
        })

        setDogs(updatedDogs)
        
        
      }
      )
  }

  useEffect( () => {
    fetch(BASE_URL)
      .then(resp => resp.json())
      .then(setDogs)
  },[])

  return (
    <div className="App">
      <DogFilter setGoodDogs={setGoodDogs}/>
      <DogBar dogs={filterDogs()} setChosenDog={setChosenDog}/>
      <DogContainer chosenDog={chosenDog} toggleGoodDog={toggleGoodDog}/>
    </div>
  );
}

export default App;
