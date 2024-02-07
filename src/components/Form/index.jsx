import { useState } from 'react';
import styles from './Form.module.css'


export default function Form() {

    const [formData, setFormData] = useState ({

        nome: '',
        sobrenome: '',
        score: '',
        time: '',
        estado: '',
    });

    const handleChance = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});


    }

    return (
        <section className={styles.formContent}>
            <h1>Placar do jogo</h1> 
            <div className={styles.form}></div>



        </section>




    )



}