import React from "react";
import withMainLayout from "../layout/withMainLayout";

const appStyles = {
    textAlign: 'center',
  };
  
  const headerStyles = {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
  };
  
  const aboutUsStyles = {
    padding: '20px',
  };
  
  function About() {
    return (
      <div style={appStyles}>
        <header style={headerStyles}>
          <h1>Добре дошли в моето React приложение!</h1>
          <p>
            Тука трябва да създам SPA страница с елемента: Начало, За Нас, Контакти.
          </p>
        </header>
  
        <section style={aboutUsStyles}>
          <h2>За Нас</h2>
          <p>
            Добре дошли в раздела "За Нас"! Ние сме екип от страстни разработчици,
            предоставящи качествени решения с помощта на React и други модерни технологии.
          </p>
        </section>
      </div>
    );
  }

export default withMainLayout(About);