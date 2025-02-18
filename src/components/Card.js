import { useState } from "react";
import './style.css';
export function Card({id,image,info,price,name, removeTour}){

  const [readmore, setreadmore]=useState(false);

const description= readmore ? info :`${info.substring(0,200)}...........`


function readmorehandler(){
  if(setreadmore(!readmore));
}



  return(
    <>
    <div className="card">
    <img className="city-img"  src={image} alt="pic">
      
    </img>
    <div className="tour-info">
    <div className="tour-details">
      <h4 className="tour-price">{price}</h4>
      <h4 className="tour-name">{name}</h4>
    </div>
    <div className="discription">{description}
    <span  className="read-more"onClick={readmorehandler}>
      {readmore? 'show less' : 'showmore'}
    </span>
    </div>
    </div>
    <button onClick={()=>removeTour(id)} className="btn-red" >
      Not interested
    </button>
    </div>
    </>
  )
}