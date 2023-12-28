import React from 'react'

function Home() {
  return (
    <>
      <div className="container my-5">
          <h2 className="text-center mb-3">Начало</h2>
      </div>
      <div className="container my-10">
        <h4>Тука съм използвал `React Router Dom`, `JSON-SERVER`, Bootstrap CSS,JS CDN и `fetch`</h4>
        <p>За `React Router Dom` се използва командата `npm i react-router-dom`.</p>
        <p>За `JSON-SERVER` се използва `npm install -g json-server` и след това се стартира с 
          `npx json-server --watch db.json --port 3004` аз специално използвам `port:3004` ,ако
          искате да го редактирате трябва да редактирате и портовете в `src/pages/Events.js` на `fetch` заявките.
        </p>
        <p>Добавил съм и `Bootstrap CSS и JS` в `public/index.html`.</p>
      </div>
    </>
  );
}

export default Home;