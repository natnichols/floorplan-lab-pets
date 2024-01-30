const Reptile = (props) => {
  return ( 
    <div>
      {props.reptile.name} - {props.reptile.breed}
      <li>Eats every {props.reptile.feedFreq} Days: {props.reptile.food}</li>
    </div>
  )
}

export default Reptile;