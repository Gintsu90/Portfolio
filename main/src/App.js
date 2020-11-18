import React, {useState, useEffect} from "react";
import Header from "./components/Header";

const App = () => {
  const [info, setInfo] = useState();

  const getInfo = () => {
    fetch(`http://localhost:5000/info`)
    .then(response => response.json())
    .then((json) => {
      console.log(json);
      setInfo(json);
    })
    .catch(error => console.error(error));
  }

  useEffect(() => {
    getInfo();
  },[]);

  return (
    <>
      
      {info && <Header info={info}/>}
       
    </>
  )
}

export default App;
