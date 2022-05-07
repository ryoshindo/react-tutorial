import React, { createContext, useState } from "react";
import "./App.css";
import Context from "./components/ContextSample/ContextA";
import Counter from "./counter";

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
      <Counter />
    </div>
  )
}

export default App
