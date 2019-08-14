import React, {useState, useEffect} from "react";
import "./App.css";
// import "./components/bigbody";
// import "./components/feeties";
// import "./components/superhead";
import axios from "axios";

function App() {
  const [nasaData, setNasaData] = useState("");
  useEffect(() => {
  axios
.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
 .then(response => setNasaData(response.data))
 
 .catch(err => console.log(err))
  }, []);
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      
    </div>
  );
}

export default App;
