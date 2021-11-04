import React, {useState, useEffect} from "react"
import "./app.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Card from "../card/Card"
import groupTolkien from "../../groupTolkien";
import groupAsimov from "../../groupAsimov";
import TitleTolkien from "../titleTolkien/TitleTolkien";
import TitleAsimov from "../titleAsimov/TitleAsimov";
import Title from "../title/Title";

function App() {

    const [joke, setJoke] = useState("This is a placeholder for a joke")

    useEffect(() => {

        const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,sexist&type=twopart"

        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()
            console.log(json)
            setJoke(json)
        }
        fetchData()
    }, [])

    const [listOfPeopleTolkien, setListOfPeopleTolkien] = useState(groupTolkien)
    const [listOfPeopleAsimov, setListOfPeopleAsimov] = useState(groupAsimov)

    function toggleScratchedStatusTolkien(card) {

        //Toggle to scratch and unscratch cards
        if (card.scratched) {
            listOfPeopleTolkien[card.key].scratched = false
            setListOfPeopleTolkien([...listOfPeopleTolkien])
        } else {
            listOfPeopleTolkien[card.key].scratched = true
            setListOfPeopleTolkien([...listOfPeopleTolkien])
        }
    }

    function toggleScratchedStatusAsimov(card){
        if (card.scratched) {
            listOfPeopleAsimov[card.key].scratched = false
            setListOfPeopleAsimov([...listOfPeopleAsimov])
        } else {
            listOfPeopleAsimov[card.key].scratched = true
            setListOfPeopleAsimov([...listOfPeopleAsimov])
        }
    }

    console.log(listOfPeopleTolkien)
    return (
        <div>
            <Header text="Scrum Cheat"/>

            <div className={"main-container"}>

                <TitleTolkien text="Tolkien"/>

                <div className={"cards-tolkien"}>
                    {listOfPeopleTolkien.map(card => (
                        <Card
                            key={card.key}
                            name={card.name}
                            role={card.role}
                            scratched={card.scratched}
                            onClick={() => toggleScratchedStatusTolkien(card)}
                        />
                    ))}
                </div>

                <TitleAsimov text="Asimov"/>

                <div className={"cards-asimov"}>
                    {listOfPeopleAsimov.map(card => (
                        <Card
                            key={card.key}
                            name={card.name}
                            role={card.role}
                            scratched={card.scratched}
                            onClick={() => toggleScratchedStatusAsimov(card)}
                        />
                    ))}
                </div>

                <Title text="Joke of the day"/>

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
