import React, { useEffect, useState } from 'react'

export default function Events() {
  const [content, setContent] = useState(<EventLis showForm={showForm} />);

  function showList () {
    setContent(<EventLis showForm={showForm} />);
  }

  function showForm(event) {
    setContent(<EventForm event={event} showList={showList} />);
  }

  return (
    <div className="container my-5">
      {content}
    </div>
  );
}

function EventLis(props) {
  const [events, setEvents] = useState([]);

  function fetchEvents() {
    fetch('http://localhost:3004/events')
    .then((response) => {
      if(!response.ok) {
        throw new Error("Неочакван отговор на сървъра.");
      }
      return response.json()
    })
    .then((data) => {
      //console.log(data);
      setEvents(data);
    })
    .catch((error) => console.log("Грешка: ", error));
  }

  //fetchEvents();
  useEffect(() => fetchEvents(), []);

  function deleteEvent(id) {
    fetch('http://localhost:3004/events/' + id, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => fetchEvents());
  }

  return (
    <>
      <h2 className="text-center mb-3">Списък с Евенти</h2>
      <button onClick={() => props.showForm({})} type="button" className="btn btn-primary me-2">Добави</button>
      <button onClick={() => fetchEvents()} type="button" className="btn btn-outline-primary me-2">Обнови</button>
      <table className="table">
        <thead>
          <tr>
            <th>№:</th>
            <th>Дата:</th>
            <th>Час:</th>
            <th>Място:</th>
            <th>Описание:</th>
            <th>Създадено на:</th>
            <th>Опции:</th>
          </tr>
        </thead>
        <tbody>
          {
            events.map((event, index) => {
              return (
                <tr key={index}>
                  <td>{event.id}</td>
                  <td>{event.date}</td>
                  <td>{event.time}</td>
                  <td>{event.place}</td>
                  <td>{event.description}</td>
                  <td>{event.createdAt}</td>
                  <td td style={{ width: '10px', whiteSpace: 'nowrap' }}>
                    <button onClick={() => props.showForm(event)} type="button" className="btn btn-primary btn-sm me-2">Редактирай</button>
                    <button onClick={() => deleteEvent(event.id)} type="button" className="btn btn-danger btn-sm">Изтрий</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}

function EventForm(props) {
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    // convert formData to object
    const event = Object.fromEntries(formData.entries());

    // form validation
    if (!event.date || !event.time || !event.place) {
      console.log("Моля попълнете всички полета!");
      setErrorMessage(
        <div className="alert alert-warning text-center" role="alert">
          Моля попълнете всички полета!
        </div>
      )
      return;
    }

    if (props.event.id) {
      // edit event
      fetch('http://localhost:3004/events/' + props.event.id, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Отговорът на мрежата не беше ОК");
          }
          return response.json()
        })
        .then((data) => props.showList())
        .catch((error) => {
          console.error("Грешка: ", error);
        });
    }
    else {
      // create event
      event.createdAt = new Date().toISOString().slice(0, 10);
      fetch('http://localhost:3004/events', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Отговорът на мрежата не беше ОК");
          }
          return response.json()
        })
        .then((data) => props.showList())
        .catch((error) => {
          console.error("Грешка: ", error);
        });
    }
  }

  return (
    <>
      <h2 className="text-center mb-3">{props.event.id ? "Редактирай Евент" : "Създай нов Евент"}</h2>
      <button onClick={() => props.showList()} type="button" className="btn btn-secondary me-2">Затвори</button>

      <div className="row">
        <div className="col-lg-6 mx-auto">

          {errorMessage}

          <form onSubmit={(e) => handleSubmit(e)}>
            
          {props.event.id && <div className="row mb-3">
              <label className="col-sm-4 col-form-label">№:</label>
              <div className="col-sm-8">
                <input readOnly className="form-control-plaintext"
                  name="id"
                  defaultValue={props.event.id} />
              </div>
            </div>}

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Дата:</label>
              <div className="col-sm-8">
                <input className="form-control"
                  name="date"
                  defaultValue={props.event.date} />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Час:</label>
              <div className="col-sm-8">
                <input className="form-control"
                  name="time"
                  defaultValue={props.event.time} />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Място:</label>
              <div className="col-sm-8">
                <select className="form-select"
                  name="place"
                  defaultValue={props.event.place}>
                    <option value='Офис'>Офис</option>
                    <option value='Зала 1'>Зала 1</option>
                    <option value='Зала 2'>Зала 2</option>
                    <option value='Конферентна зала 1'>Конферентна зала 1</option>
                    <option value='Конферентна зала 2'>Конферентна зала 2</option>
                  </select>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Описание:</label>
              <div className="col-sm-8">
                <input className="form-control"
                  name="description"
                  defaultValue={props.event.description} />
              </div>
            </div>

            <div className="row">
              <div className="offset-sm-4 col-sm-4 d-grid">
                <button type="submit" className="btn btn-primary btn-sm me-3">Запази</button>
              </div>
              <div className="col-sm-4 d-grid">
                <button onClick={() => props.showList()} type="button" className="btn btn-secondary me-2">Затвори</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}