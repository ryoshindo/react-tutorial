import React, { createContext, useState } from "react";
import "./App.css";
import Context from "./components/ContextSample/ContextA";

export const UserContext = createContext()
export const HobbyContext = createContext()

const App = () => {
  const [user, setUser] = useState({
    name: "セイラ",
    age: "17",
  })

  const [hobby, setHobby] = useState("キャンプ")

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <HobbyContext.Provider value={hobby}>
          <Context />
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
