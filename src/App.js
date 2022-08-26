import Content from './Content.json';

const Organisation= Content.map(

  (Organisation) => {
    return(
      <div key= {Organisation.class} className="mt-3  p-3 border rounded shadow">     
        <h1 className="text-center">{Organisation.class}</h1>
        <p className="fst-italic">{Organisation.description}</p>
        <p className="fst-italic">{Organisation.Containment}</p>
        <p className="fst-italic">{Organisation.item}</p>
        <p className="text-center"><img src={Organisation.image} alt="Organisation" className="border rounded" style={{maxWidth:"450px"}}></img></p>
       
      </div>
    );
    
  }
);
function App() {
  return(
    <div style={{ backgroundColor: "#ffff9f",}} >
  
     
    {Organisation}
  
  </div>
  )
  
}

export default App;
