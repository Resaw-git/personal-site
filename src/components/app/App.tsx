import React from 'react';
import styles from './app.module.css';
import Home from "../../pages/Home";
import Header from "../header/Header";

function App() {
  return (
      <div className={styles.container}>
        <Header />
        <Home />
      </div>
  );
}

export default App;
