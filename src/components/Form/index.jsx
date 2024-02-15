/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Form.module.css";


export default function Form({ jogadorList, setJogadorList }) {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    score: "",
    time: "",
    estado: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleForm = () => {
  //     const jogadoresArray = [jogadorList, formData];
  //     localStorage.setItem("jogadores", JSON.stringify(jogadoresArray));
  // }
  //o chat gpt disse que o código abaixo é redundante

  const handleForm = () => {
    const jogadoresArray = [...jogadorList, formData];
    setJogadorList(jogadorList);

    localStorage.setItem("jogadores", JSON.stringify(jogadoresArray));
  };

  // <div className="campo">
  //                         <label> Nome </label>
  //                         <input name="nome" type="text" placeholder="Digite o Nome" onChange={handleChange}/>
  //                     </div>

  return (
    <section className={styles.formContent}>
      <h1>Cadastrar Jogador</h1>
      <form className={styles.form} onSubmit={handleForm}>
        <div className={styles.input}>
          <div className={styles.campo}>
            <label>Nome</label>
            <input
              name="nome"
              type="text"
              placeholder="Digite o nome"
              onChange={handleChange}
            />
          </div>

          <div className={styles.campo}>
            <label>Sobrenome</label>
            <input
              name="sobrenome"
              type="text"
              placeholder="Digite o sobrenome"
              onChange={handleChange}
            />
          </div>

          <div className={styles.campo}>
            <label>Score</label>
            <input
              name="score"
              type="number"
              placeholder="Digite a pontuação"
              onChange={handleChange}
            />
          </div>

          <div className={styles.campo}>
            <label>Time</label>
            <input
              name="time"
              type="text"
              placeholder="Digite o time"
              onChange={handleChange}
            />
          </div>

          <div className={styles.campo}>
            <label>Estado</label>
            <input
              name="estado"
              type="text"
              placeholder="Digite o estado"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.Containerbutton}>
          <button className={styles.button}>Criar jogador</button>
        </div>
      </form>
    </section>
  );
}
