import './App.css'

const Hello = (props) => {
  return (
    <div>
      <p>Hello { props.name },your age is { props.age }</p>
    </div>
  )
}
const App = () => {
  

  return (
    <>
      <div>
        <h1>Greetings</h1>
        <Hello name='mani' age='25' />
        <Hello name='mathan' age='22' />
       </div>
      
    </>
  )
}

export default App;
