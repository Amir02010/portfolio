import React from 'react'
import './services.css'

// ? icons
import { FaHtml5, FaCss3Alt, FaJs, FaSass } from "react-icons/fa";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: <FaHtml5 />,
      title: "HTML5 Semantic",
      text: "Построение правильной, семантически верной и доступной структуры веб-страниц для лучшего SEO."
    },
    {
      id: 2,
      icon: <FaCss3Alt />,
      title: "CSS3 Styling",
      text: "Создание красивых, отзывчивых и современных интерфейсов с использованием Flexbox, Grid и анимаций."
    },
    {
      id: 3,
      icon: <FaJs />,
      title: "JavaScript (ES6+)",
      text: "Разработка сложной логики приложения, работа с асинхронными запросами, API и динамическим контентом."
    },
    {
      id: 4,
      icon: <FaSass />,
      title: "Sass / SCSS",
      text: "Организация чистого, поддерживаемого и модульного CSS-кода с помощью переменных, миксинов и вложенности."
    }
  ];

  return (
    <div className='services'>
      <div className="max-width">
        
        <div className="services-title">
          <span>Services</span>
          <h2>Skill-Set</h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Services