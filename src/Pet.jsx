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
      <Cat />
      <Dog />
      <Reptile />
      <Bird />
      <Amphibian />
      <Fish />
    </div>
  )
}
export default Pet;