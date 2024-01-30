import Cat from "./Cat"
import Dog from "./Dog"
import Reptile from "./Reptile"

const Pet = (props) => {
  return ( 
    <div>
      <h2>Pets</h2>
      <Cat />
      <Dog />
      <Reptile />
    </div>
  )
}
export default Pet;