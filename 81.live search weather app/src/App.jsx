import React, { useEffect, useState } from "react";
const App = () => {
  const[city,setCity]=useState(null);
  const[search,setSearch]=useState('Pakistan')

  useEffect(()=>{
const fetchApi=async ()=>{
  const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2f8598cd4b28ba4666c7aeb92625edb5`
const response= await fetch(url);
const resjson=await response.json();
setCity(resjson.main)
// console.log(resjson);
}

    fetchApi();
  },[search])
  return (
    <>
      <div className="maindivW">
        <div className="boxW">
          <div className="inputfielddivW">
            <input
              type="search"
              className="inputfield"
              value={search}
              onChange={(event) => {setSearch(event.target.value)}}
            />
          </div>

{!city?(<p className='errorW'>no city found</p>):(
  <div className="infoW">
          <h1 className='iconW'>
              <i className='fas fa-street-view'></i>
              <span>{search}</span>
          </h1>
          
            <h3 className='tempW'>{city.temp}°Cel</h3>
            <span className='minmaxW'>Min{city.temp_min}°Cel | Max{city.temp_max}°Cel</span>
          </div>
          )}
          
        </div>
      </div>
    </>
  );
};
export default App;
