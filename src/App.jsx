import {FaWhatsapp, FaInstagram, FaSearch, FaAddressCard} from 'react-icons/fa'

import UserImage from './assets/slogo2.png'
import Logo from './assets/logo.png'

import './App.sass'

function App() {
  let options = [
    {name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/trinitycoworking/'},
    {name: 'Site', icon: <FaAddressCard />, link: 'https://trinitycoworking.github.io/site/'},
    {name: 'Whatsapp', icon: <FaWhatsapp />, link: 'https://wa.me/5522998727548'},
    {name: 'Consultar disponibilidade', icon: <FaSearch />, link: 'https://trinitycoworking.github.io/Trinity_Horarios/'},
  ]

  return (
    <div className="App">
      <div className='image-section'>
        <img src={UserImage} className='user-image' />
      </div>
      <ul className='buttons-container'>
        {options.map((option) => (
          <li className='button-box'>
            <a target='_blank' href={option.link}>
              {option.icon}
              <span>{option.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <a href='https://dredeco.github.io/portfolio' target='_blank'>
      <img src={Logo} className='logo'/>
      </a>
    </div>
  )
}

export default App
