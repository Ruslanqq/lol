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
<form className={styles.form}  action="https://public.herotofu.com/v1/9488c200-e73b-11ec-b069-efe5ca590096" method="post">
  <div>
    <label htmlFor="name"></label>
    
    <input className={styles.input} placeholder='Имя' name="Name" id="name" type="text" required />
  </div>
  <div>
    <label htmlFor="number"></label>
    <input className={styles.input} placeholder='Номер' name="Number" id="email" type="text" required />
  </div>
  <div>
    <input className={styles.form__button} type="submit" value="Отправить" />
  </div>
</form>
  );
}


