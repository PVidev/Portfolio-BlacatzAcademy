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
  
  const contactStyles = {
    margin: '20px',
  };
  
  function Contact() {
    return (
      <div style={appStyles}>
        <header style={headerStyles}>
          <h1>Добре дошли в моето React приложение!</h1>
          <p>
            Тука трябва да създам SPA страница с елемента: Начало, За Нас, Контакти.
          </p>
        </header>
  
        <section style={contactStyles}>
          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
          <p className="text-center w-responsive mx-auto mb-5">Имате ли някакви въпроси? Моля, не се колебайте да 
          се свържете директно с нас. Нашият екип ще се свърже с вас в рамките на няколко часа, за да ви помогне.</p>
  
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="name" name="name" className="form-control" />
                      <label htmlFor="name" className="">Вашето име</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="email" name="email" className="form-control" />
                      <label htmlFor="email" className="">Електронна поща</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="subject" name="subject" className="form-control" />
                      <label htmlFor="subject" className="">Заглавие</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                        <textarea type="text" 
                                id="message" 
                                name="message" 
                                rows="2" 
                                className="form-control md-textarea">
                        </textarea>
                      <label htmlFor="message">Съобщение</label>
                    </div>
                  </div>
                </div>
              </form>
  
              <div className="text-center text-md-left">
                <a className="btn btn-primary" 
                    onClick={() => 
                    document.getElementById('contact-form').submit()}>
                    Изпрати
                </a>
              </div>
              <div className="status"></div>
            </div>
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>България, Каспичан</p>
                </li>
                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+359 888 888 888</p>
                </li>
                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>test@test.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default withMainLayout(Contact);