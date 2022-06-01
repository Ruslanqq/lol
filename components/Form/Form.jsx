import { useState } from 'react';
import React from 'react';
import Head from 'next/head';
import styles from './Form.module.css';



export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    console.log(data);
  };

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
        <form id='Form' action="ariuskg@gmail.com" className={styles.form}>
          <label  htmlFor="name"></label>
          <input className={styles.input}
            id="name"
            type="text"
            onChange={e => setName(e.target.value)}
            placeholder = "Имя"
          />
          <label htmlFor="email"></label>
          <input className={styles.input}
            id="number"
            type="number"
            placeholder = "Номер"
            onChange={e => setEmail(e.target.value)}
          />
          <label className={styles.custom_checkbox}> <input   type="checkbox" checked={checked}
          onChange={handleChange} /><p className={styles.text__checkbox}>Нажимая на кпопку вы соглашаетесь с политикой конфидициальности</p></label>
          
          <button className={styles.form__button} type="submit">Отправить</button>
        </form>
  );
}


