import React, { useState} from 'react'
import Menu from './Menu'
import '../Css/Button.css'
import axios from 'axios'


const Button = () => {

  const [time, setTime] = useState("")
  const [txt, setTXT] = useState("PUSH")
 const hola = "Hola"
  const tiempo = time;
  const tx=txt 
 function clickbutton()  {
  if (txt=="PUSH"){
   setTime(10);
    setTXT("");
    setTimeout(()=>{
      
      axios.post('http://localhost:3001/Boton', {mensaje:"Un Mensaje"})
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

      return(speechSynthesis.speak(new SpeechSynthesisUtterance("Wait")));
      
      
    },10000)
  

  }
 
   if (tiempo>0){
    clearTimeout(timeout);
    window.location.reload()
    return(speechSynthesis.speak(new SpeechSynthesisUtterance("!Cancel!")));

   }
  }

 
  const timeout = setTimeout(()=>{
      
    if(tiempo>0){
    setTime(tiempo - 1)
    }else{
      setTXT("PUSH")
      setTime("")
    }
   
    
  },1000)
   
return(
    <>
        <Menu />
        <div className="App">
      <header className="App-header">
      <div className="fletrero">
        <div className="letrero">
          <strong>PUSH BUTTON FOR</strong>
          <br/><i class="fas fa-walking"></i>
        </div>
        </div>
        <button onClick={clickbutton}  className="am" id="bt">
        {tiempo} {tx}</button> 
              
      </header>
    </div>
    </>
      )
    }
    
  export default Button;