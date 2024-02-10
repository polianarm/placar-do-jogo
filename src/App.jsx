import { useState } from "react";
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Table from "./components/Table"

function App() {

  const data = localStorage.getItem("jogadores");
  const [jogadorList, setJogadorList] = useState( data ? JSON.parse(data) : []);


  return (
    <>
    <Navbar />
     <Form jogadorList={jogadorList} setJogadorList={setJogadorList} />
     <Table jogadorList={jogadorList} setJogadorList={setJogadorList} />

    </>
  )
}

export default App
