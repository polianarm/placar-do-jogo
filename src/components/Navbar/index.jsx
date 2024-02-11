import styles from './Navbar.module.css'


export default function Navbar() {


return (

    <header className={styles.Navbar}>
    <h2>Placar do Jogo</h2>
    <nav className={styles.nav}>
      <a href="#">HOME</a>
      <a href="#ranking">Ranking</a>
    </nav>
  </header>


)


}