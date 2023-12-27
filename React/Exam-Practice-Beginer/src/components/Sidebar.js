import React from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar() {

  const MENU_ITEMS = [
    { link: "/", title: "Теория" },
    { link: "/practice1", title: "Задача 1" },
    { link: "/practice2", title: "Задача 2" },
    { link: "/practice3", title: "Задача 3" },
    { link: "/practice4", title: "Задача 4" },
    { link: "/practice5", title: "Задача 5" },
  ]
  
  const SECOND_MENU = [
    { link: "/nachalo", title: "Начало" },
    { link: "/about", title: "За Нас" },
    { link: "/contact", title: "Контакти" },
  ]

  return (
    <>
        <div className="bg-danger" style={{height: '100vh'}}>
            <div className="position-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        {
                        MENU_ITEMS.map(i => 
                            <Link className="nav-link text-white" to={i.link}>
                                {i.title}
                            </Link>)
                        }
                    </li>
                    <li className="nav-link text-white">
                        Задача 6:
                    </li>
                    <li className="nav-item">
                        {
                        SECOND_MENU.map(i => 
                            <Link className="nav-link text-white" to={i.link}>
                                {i.title}
                            </Link>)
                        }
                    </li>
                </ul>
            </div>
        </div>
    </>
  );
}