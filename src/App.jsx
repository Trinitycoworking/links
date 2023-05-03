import {FaWhatsapp, FaInstagram, FaSearch, FaAddressCard} from 'react-icons/fa'

import UserImage from './assets/slogo2.png'
import Logo from './assets/logo.png'

import './App.sass'

function App() {
  let options = [
    {name: 'Site', icon: <FaAddressCard />, link: 'https://trinitycoworking.github.io/site/'},
    {name: 'Whatsapp', icon: <FaWhatsapp />, link: 'https://wa.me/5522998727548'},
    {name: 'Consultar disponibilidade das salas', icon: <FaSearch />, link: 'https://trinitycoworking.github.io/Trinity_Horarios/'},
    {name: 'Nossa Localização', icon: <FaAddressCard />, link: 'https://www.google.com/maps/place/Trinity+Coworking/@-21.76195,-41.332844,15z/data=!4m2!3m1!1s0x0:0xe2dce890eee92c0c?sa=X&ved=2ahUKEwjxgebCptn-AhU0qpUCHfewAvEQ_BJ6BAgvEAg'},
  ]

  return (
    <div className="App">

      <div className='image-section'>
        <img src={UserImage} className='user-image' />
      </div>

      <div className='header'>
        <h1>Trinity Coworking</h1>
        <p>O seu escritório inteligente!</p>
      </div>

      <ul className='buttons-container'>
        {options.map((option) => (
          <li className='button-box'>
            <a target='_blank' href={option.link}>
              <span>{option.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <a className='footer' href='https://dredeco.github.io/portfolio' target='_blank'>
      <p>Desenvolvido por:</p><img src={Logo} className='logo'/>
      </a>
    </div>
  )
}

export default App
