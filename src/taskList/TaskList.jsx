const Items = ({ nombre, visto }) => {
  return(
    <li>
      {nombre} 
      {visto ? "👍" : "😒"}
      </li>
  )
}

export const TaskList = () => {
  return (
    <>
    <h1>App List</h1>
    <ol>
      <Items nombre="Sergie" visto={true}></Items>
      <Items nombre="Midu" visto={true}></Items>
      <Items nombre="Gonzi" visto={false}></Items>
    </ol>
    </>
  )
}
