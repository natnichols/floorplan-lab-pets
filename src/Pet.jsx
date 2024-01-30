import Cat from "./Cat"
import Dog from "./Dog"
import Reptile from "./Reptile"
import Bird from "./Bird"
import Amphibian from "./Amphibian"
import Fish from "./Fish"

const Pet = (props) => {
  return ( 
    <div>
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
      </div>
      <Reptile />
      <Bird />
      <Amphibian />
      <Fish />
    </div>
  )
}
export default Pet;