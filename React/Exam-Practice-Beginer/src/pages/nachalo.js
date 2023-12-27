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

function Nachalo() {
    return (
        <>
        <div style={appStyles}>
            <header style={headerStyles}>
                <h1>
                    Добре дошли в моето React приложение!
                </h1>
                <p>
                    Тука трябва да създам SPA страница с елемента: Начало, За Нас, Контакти. 
                </p>
                <p></p>
            </header>
        </div>
        </>
    );
}

export default withMainLayout(Nachalo);