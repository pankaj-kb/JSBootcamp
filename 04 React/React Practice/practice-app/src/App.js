import NumberList from "./NumberList";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function App() { 
  return (<div>
  <Welcome name = "Pankaj"/>
    <Welcome name = "Gaurav"/>
    <Welcome name = "Nishant"/>
    <Welcome name = "Rohit"/>
    <Welcome name = "Chammo"/>
    <NumberList/>
  </div>);
}


export default App;