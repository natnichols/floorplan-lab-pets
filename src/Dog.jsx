const Dog = (props) => {
  return ( 
    <div>
      {props.dog.name} - {props.dog.breed}
      <li>{props.dog.fed ? "Fed" : "Is that Ham?"} </li>
    </div>
  )
}

export default Dog;