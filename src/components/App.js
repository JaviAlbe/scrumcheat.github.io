import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import User from "./User"
import listOfUsers from "../listOfUsers"

function App() {
  return (
      <div>
        <Header />

        {listOfUsers.map(user => (
            <User
                key={user.key}
                name={user.name}
                role={user.role}
            />
        ))}

        <Footer />
      </div>
  );
}

export default App;
