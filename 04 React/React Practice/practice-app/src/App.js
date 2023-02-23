function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}


function App() {
  return (<div>
  <Welcome name = "pankaj"/>
    <Welcome name = "Gaurav"/>
    <Welcome name = "Nishant"/>
    <Welcome name = "Rohit"/>
  </div>
  
  );
}

export default App;