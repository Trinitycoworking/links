import {FaWhatsapp, FaInstagram, FaSearch, FaAddressCard} from 'react-icons/fa'

import UserImage from './assets/slogo2.png'
import Logo from './assets/logo.png'

import './App.sass'

function App() {
  let options = [
    {name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/dredeco.dev/'},
    {name: 'Site', icon: <FaAddressCard />, link: 'https://dredeco.github.io/portfolio/'},
    {name: 'Whatsapp', icon: <FaWhatsapp />, link: 'https://wa.me/5522997971144'},
    {name: 'Consultar disponibilidade', icon: <FaSearch />, link: 'https://www.linkedin.com/in/andrefersouza/'},
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
      <a href={options[1].link} target='_blank'>
      <img src={Logo} className='logo'/>
      </a>
    </div>
  )
}

export default App