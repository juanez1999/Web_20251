import MyCard from "./components/Card/Card";
import { cards } from "./data/Cards";

function App() {
  //Logica de javascript
  return ( //Logica de HTML
    <>
    <MyCard title="Hola" description="chauu"/>
    <div>
      {cards.map((card)=>{
        return (<MyCard title={card.title} description={card.description}/>)
      })}
    </div>

  
    </>
  )
}

export default App
