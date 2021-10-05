import React, {useState, useEffect} from "react"
import "./app.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Card from "../card/Card"
import listOfUsers from "../../listOfUsers"
import LoadJokeBtn from "../joke/LoadJokeBtn";

function App() {

    const [joke, setJoke] = useState("This is a placeholder for a joke")

    useEffect(() => {

        //Not working
        // const url = "https://official-joke-api.appspot.com/random_joke"

        const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,sexist&type=twopart"

        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()
            console.log(json)
            setJoke(json)
        }
        fetchData()
    }, [])

    /**
     * Big list
     * useEffect(() => {

        const url = "http://api.icndb.com/jokes/"

        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()
            console.log(json)
            localListOfJokes.push(json.value)
            console.log(localListOfJokes)
        }
        fetchData()
    }, [])
     * */

    const [listOfPeople, setListOfPeople] = useState(listOfUsers)

    function toggleScratchedStatus(card) {

        //Toggle to scratch and unscratch cards
        if (card.scratched) {
            listOfPeople[card.key].scratched = false
            setListOfPeople([...listOfPeople])
        } else {
            listOfPeople[card.key].scratched = true
            setListOfPeople([...listOfPeople])
        }
    }

    console.log(listOfPeople)
    return (
        <div>
            <Header/>

            <div className={"main-container"}>

                <div className={"cards-container"}>
                    {listOfPeople.map(card => (
                        <Card
                            key={card.key}
                            name={card.name}
                            role={card.role}
                            scratched={card.scratched}
                            onClick={() => toggleScratchedStatus(card)}
                        />
                    ))}
                </div>

                <div className={"joke-container"}>
                    <div className={"joke-text-container"}>
                        <p className={"joke-text"}>{"-" + joke.setup}</p>
                        <p className={"joke-text"}>{"..." + joke.delivery}</p>
                    </div>

                    <div className={"load-btn-container"}>
                        {/*<LoadJokeBtn onClick={() => console.log("Btn Clicked")}/>*/}
                    </div>

                </div>

            </div>

            <Footer/>

        </div>
    );
}

export default App;
