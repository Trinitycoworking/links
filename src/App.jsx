import {FaWhatsapp, FaInstagram, FaLinkedinIn, FaAddressCard} from 'react-icons/fa'

import UserImage from './assets/userq.jpg'
import Logo from './assets/logo.png'

import './App.sass'

function App() {
  let options = [
    {name: 'Dredeco DEV', icon: <FaInstagram />, link: 'https://www.instagram.com/dredeco.dev/'},
    {name: 'Portfólio', icon: <FaAddressCard />, link: 'https://dredeco.github.io/portfolio-page/'},
    {name: 'Whatsapp', icon: <FaWhatsapp />, link: 'https://wa.me/5522997971144'},
    {name: 'Linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/andrefersouza/'},
  ]

  return (
    <div className="App">
      <img src={UserImage} className='user-image' />
      <ul className='buttons-container'>
        {options.map((option) => (
          <li className='button-box'>
            <a target='_blank' href={option.link}>{option.icon}{option.name}</a>
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
