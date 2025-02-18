
import './App.css';

import data from './data';
import { Tours } from './components/Tours';
import { useState } from "react";
function App() {

  const [ tours, settours]= useState(data);


  // for deleting the div in which you are not intersted
  function removeTour(id){
    const newtour=tours.filter(tour =>tour.id!==id);
    settours(newtour)

  }


  // when all data delete then refesh data comes
  if(tours.length===0){
    return(
      <div className='refresh'>
        <h2 className='heading'>No Tours Left</h2>
        <button className='refresh-btn' onClick={()=>settours(data)}>Refresh</button>
      </div>
    )
  }

  return (
   <div className='app'>
   
     {/* here remore happens */}
    <Tours tours={tours} removeTour={removeTour}>

    </Tours>
   </div>
  );
}

export default App;
