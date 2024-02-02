import './App.css';
import React, { useEffect, useState } from 'react';
  

function App() {


  let [name, setname] = useState("");
  let [birthdate, setbdate] = useState("");
  let [currentdate, setcdate] = useState("");
  let [result, setresult] = useState({
    ms:"00",
    sec:"00",
    min:"00",
    hr: "00",
    days:"00",
    weeks:"00",
    month:"00",
    year:"00",
  });

  useEffect(() => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    const today = `${year}-${formattedMonth}-${formattedDay}`;
    setcdate(today);
  }, []);

 
  const btnclick = () => {

    if(name === "")
    {
      alert("PLEASE ENTER YOUR NAME ! ");
      return;
    }
    const bdate = new Date(birthdate);
    const cdate = new Date(currentdate);


    const msecond = cdate - bdate;
    const second = msecond / 1000;
    const min = second / 60;
    const hours = min / 60;
    const day = hours / 24;
    const week = Math.floor(day / 7);
    const month = Math.floor(week * 0.229984);
    const years = Math.floor(month / 12);

    setresult({
      ms: msecond,
      sec: second,
      min: min,
      hr: hours,
      days: day,
      weeks: week,
      month: month,
      year: years,
    });

  };

  


  return (
    <div className="App">
      <form>
        <center className='center'>
          <h3 class="heading">age calculator</h3>
          <div class="design">Your Name:-<input type="text" value={name} onChange={(e) => setname(e.target.value)}></input></div>
          <div class="design">Date Of Birth:-<input type="date" value={birthdate} onChange={(e) => setbdate(e.target.value)} ></input></div>
          <div class="design">Today Date:-<input type="date" value={currentdate} onChange={(e) => setcdate(e.target.value)} ></input></div><br></br>
          <div class="btn"><input type="button" value="Calulate Your Age" onClick={btnclick}></input></div><br></br>
          <div class="age">
            <h3>year</h3>
            <input type="text" value={result.year}></input>
          </div>
          <div class="age">
            <h3>month</h3>
            <input type="text" value={result.month}></input>
          </div>
          <div class="age">
            <h3>week</h3>
            <input type="text" value={result.weeks}></input>
          </div>
          <div class="age">
            <h3>Day</h3>
            <input type="text" value={result.days}></input>
          </div><br></br>
          <div class="age">
            <h3>Hours</h3>
            <input type="text" value={result.hr}></input>
          </div>
          <div class="age">
            <h3>minutes</h3>
            <input type="text" value={result.min}></input>
          </div>
          <div class="age">
            <h3>second</h3>
            <input type="text" value={result.sec}></input>
          </div>
        </center>
      </form>
    </div>
  );
}

export default App;
