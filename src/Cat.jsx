const Cat = (props) => {
  return ( 
    <div>
      {props.cat.name} - {props.cat.breed}
      <li>{props.cat.fed ? "Fed" : "Mother, I'm Starving" } </li>
    </div>
  )
}

export default Cat;