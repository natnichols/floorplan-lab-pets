const Reptile = (props) => {
  return ( 
    <div>
      {props.reptile.name} - {props.reptile.breed}
      <li>{props.reptile.food}</li>
    </div>
  )
}

export default Reptile;