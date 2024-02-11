/* eslint-disable react/prop-types */

import styles from "./Table.module.css";

export default function Table({ jogadorList, setJogadorList }) {
  const removeAll = () => {
    localStorage.removeItem("jogadores");
    setJogadorList([]);
  };

  const removeJogador = (index) => {
    const listaAtualizada = [...jogadorList];
    listaAtualizada.splice(index, 1);

    setJogadorList(listaAtualizada);
    localStorage.setItem("jogadores", JSON.stringify(listaAtualizada));
  };

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <tr>Nome</tr>
            <tr>Sobrenome</tr>
            <tr>Pontuação</tr>
            <tr>Time</tr>
            <tr>Estado</tr>
          </tr>
        </thead>

        <tbody>
          {jogadorList.map((jogador, index) => (
            <tr key={index}>
              <td>{jogador.nome}</td>
              <td>{jogador.sobrenome}</td>
              <td>{jogador.score}</td>
              <td>{jogador.time}</td>
              <td>{jogador.estado}</td>
              <td>
                <button
                  className={styles.buttonRemove}
                  onClick={() => removeJogador(index)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={removeAll}>Limpar</button>
      </div>
    </div>
  );
}
