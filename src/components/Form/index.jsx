/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Form.module.css";


export default function Form({ jogadorList, setJogadorList }) {
  
  const [formErros, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    score: "",
    time: "",
    estado: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (formErros[e.target.name]) {
      setFormErrors({...formErros, [e.target.name]: ''});
    }
  };

  const handleForm = (e) => {

    e.preventDefault()

    if(!validForm()) {

      return;
    }

    const jogadoresArray = [...jogadorList, formData];
    setJogadorList(jogadorList);

    localStorage.setItem("jogadores", JSON.stringify(jogadoresArray));

    setFormData({
      nome: "",
      sobrenome: "",
      score: "",
      time: "",
      estado: "",
    });
  };

//nome, sobrenome, score, time, estado
  const validForm = () => {
    let errors = {};


    if(formData.nome.trim() === '') {
      errors.nome='O nome é obrigatório!';
    }

    if(formData.sobrenome.trim() === '') {
      errors.sobrenome='O sobrenome é obrigatório!';
    }

    if(formData.score.length <= 0) {
      errors.score='O score não pode ser 0!';
    }

    if(formData.time.trim() === '') {
      errors.time='O jogador precisa ter um time!';
    }

    if(formData.estado.trim() === '') {
      errors.estado='O estado é obrigatório';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  return (
    <section className={styles.formContent}>
      <h1>Cadastrar Jogador</h1>
      <form className={styles.form} onSubmit={handleForm}>
        <div className={styles.input}>
          <div className={formErros.nome ? `${styles.campo} ${styles.error}` : styles.campo}>
            <label>Nome</label>
            <input
              name="nome"
              type="text"
              placeholder="Digite o nome"
              onChange={handleChange}
            />
            {formErros.nome && <span>{formErros.nome}</span>}
          </div>

          <div className={formErros.sobrenome ? `${styles.campo} ${styles.error}` : styles.campo}>
            <label>Sobrenome</label>
            <input
              name="sobrenome"
              type="text"
              placeholder="Digite o sobrenome"
              onChange={handleChange}
            />
             {formErros.sobrenome && <span>{formErros.sobrenome}</span>}
          </div>

          <div className={formErros.score ? `${styles.campo} ${styles.error}` : styles.campo}>
            <label>Score</label>
            <input
              name="score"
              type="number"
              placeholder="Digite a pontuação"
              onChange={handleChange}
            />
             {formErros.score && <span>{formErros.score}</span>}
          </div>

          <div className={formErros.time ? `${styles.campo} ${styles.error}` : styles.campo}>
            <label>Time</label>
            <input
              name="time"
              type="text"
              placeholder="Digite o time"
              onChange={handleChange}
            />
             {formErros.time && <span>{formErros.time}</span>}
          </div>

          <div className={formErros.estado ? `${styles.campo} ${styles.error}` : '${styles.campo}'}>
            <label>Estado</label>
            <input
              name="estado"
              type="text"
              placeholder="Digite o estado"
              onChange={handleChange}
            />
             {formErros.estado && <span>{formErros.estado}</span>}
          </div>
        </div>

        <div className={styles.Containerbutton}>
          <button className={styles.button}>Criar jogador</button>
        </div>
      </form>
    </section>
  );
}
