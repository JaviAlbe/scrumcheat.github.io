import React, {useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"
import listOfUsers from "../listOfUsers"

function App() {

    let currentListOfUsers = listOfUsers

    const [scratched, updateScratched] = useState(false)

    //let tempScratched = false

    function toggleScratchedStatus(card){
        // console.log("I've clicked " + card.name + " whose scratched status is: " + card.scratched)

        console.log("Before the click: " + currentListOfUsers[card.key].scratched)

        //Toggle to scratch and unscratch cards
        if(scratched){
            updateScratched(false)
        }else{
            updateScratched(true)
        }

        currentListOfUsers[card.key].scratched = scratched

        // console.log(card.name + " is now set to " + card.scratched)

        console.log("After the click: " + currentListOfUsers[card.key].scratched)

    }

  return (
      <div>
        <Header />

        {currentListOfUsers.map(card => (
            <Card
                key={card.key}
                name={card.name}
                role={card.role}
                scratched={currentListOfUsers[card.key].scratched}
                onClick={() => toggleScratchedStatus(card)}
            />
        ))}

        <Footer />
      </div>
  );
}

export default App;
