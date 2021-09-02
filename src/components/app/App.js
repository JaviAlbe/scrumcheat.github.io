import React, {useState} from "react"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import Card from "./card/Card"
import listOfUsers from "../listOfUsers"

function App() {

    const [listOfPeople, setListOfPeople] = useState(listOfUsers)

    function toggleScratchedStatus(card){

        //Toggle to scratch and unscratch cards
        if(card.scratched){
            listOfPeople[card.key].scratched = false
            setListOfPeople([...listOfPeople])
        }else{
            listOfPeople[card.key].scratched = true
            setListOfPeople([...listOfPeople])
        }
    }

    console.log(listOfPeople)
  return (
      <div>
        <Header />

        {listOfPeople.map(card => (
            <Card
                key={card.key}
                name={card.name}
                role={card.role}
                scratched={card.scratched}
                onClick={() => toggleScratchedStatus(card)}
            />
        ))}

        <Footer />
      </div>
  );
}

export default App;
