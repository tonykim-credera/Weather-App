import Axios from 'axios' 

function App() {

  const cityName = "Dallas";
  const apiKey = '31b837ade58a4fb0a1d191606213009';
  const apiSource = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5&aqi=no&alerts=no`;

  const getData = () =>{
    Axios.get(apiSource).then((response) => {
      console.log(response);
    })
  }

  return (
    <div> Hello <button onClick={getData}> click me </button> </div>
  );
}

export default App;
