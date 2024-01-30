import Cat from "./Cat"
import Dog from "./Dog"
import Reptile from "./Reptile"
import Bird from "./Bird"
import Amphibian from "./Amphibian"
import Fish from "./Fish"

const Pet = (props) => {
  return ( 
    <>
      <h2>Pets</h2>
      <div>
        <h3>Cats:</h3>
        <Cat cat={{name: "Moe", breed: "Angry", fed:1 }} />
        <Cat cat={{name: "Max", breed: "Sweet", fed:0 }} />
        <Cat cat={{name: "TomTom", breed: "Orange", fed:0 }} />
      </div>
      <div>
        <h3>Dogs:</h3>
        <Dog dog={{name: "Violet", breed: "Iggy", fed:1}} />
        <Dog dog={{name: "Petunia", breed: "Boston", fed:0}} />
      </div>
      <div>
        <h3>Reptiles:</h3>
        <Reptile reptile={{name: "Oddjob", breed: "Bearded Dragon", feedFreq:2, food: "crickets"}} />
        <Reptile reptile={{name: "Kaa", breed: "Corn Snake", feedFreq:10, food: "frozen mice"}} />
      </div>
      <div>
        <h3>Birds:</h3>
        <Bird />
      </div>
      <div>
        <h3>Amphibians:</h3>
        <Amphibian />
      </div>
      <div>
        <h3>Fish:</h3>
        <Fish />
      </div>
    </>
  )
}
export default Pet;