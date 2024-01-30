import Cat from "./Cat"
import Dog from "./Dog"
import Reptile from "./Reptile"
import Bird from "./Bird"
import Amphibian from "./Amphibian"

const Pet = (props) => {
  return ( 
    <div>
      <h2>Pets</h2>
      <Cat />
      <Dog />
      <Reptile />
      <Bird />
      <Amphibian />
    </div>
  )
}
export default Pet;