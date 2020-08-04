import React from 'react';
/*import S from './Sample';*/
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
/*import Kalyani from './Kalyani';*/
import Greet from './Greetings';

function App() {
/*{
  let array=["pinky","jyo","sai","ramya"]
  return( 
  <span style={{textAlign:"center"}}>

    <h2> This is App component! </h2> 
    {array.map((value,index)=>(
      <S name={value} key={index} index={index}/>
    ))}
    <h2> Another heading </h2> 
  </span>
  )
}

class App1 extends React.Component{
  render(){
    return(
      <div> 
        <App />
        <h2> This is App1 Component </h2> 
      </div>
    )
  }
}*/
  return (
    <div className="App">
      {/*<Welcome name="Kalyani">
        <h3> Hello Kalyani How are you </h3>
      </Welcome>

      <Welcome name="Pinky">
        <h3> Hello Pinky How are you </h3>
      </Welcome>

      <Welcome name="Jyo">
        <h3> Hello Jyo How are you </h3>
      </Welcome>*/}
      <Greet></Greet>
    </div>
  );
}


export default App;
