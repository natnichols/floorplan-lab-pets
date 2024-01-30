import Cat from "./Cat"
import Dog from "./Dog"

const Pet = (props) => {
  return ( 
    <div>
      <h2>Pets</h2>
      <Cat />
      <Dog />
    </div>
  )
}
export default Pet;