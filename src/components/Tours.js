import { Card } from "./Card"
import './style.css';
export function Tours({tours , removeTour}){
return (
  <div className="container">
  <div>
  <h2 className="title">PLan with Love</h2>
  </div>

    <div className="cards">
     {
      tours.map((tour)=>{
        return <Card key={tours.id} {...tour} removeTour={removeTour}></Card>
      })
     }
    </div>
  </div>
)
}
