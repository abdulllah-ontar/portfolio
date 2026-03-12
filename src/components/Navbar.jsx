import { navIcons, navLinks } from '#constants'
import React from 'react'
import dayjs from "dayjs";

function Navbar() {
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo" className='w-10 h-10' />
            <p className='font-bold'>Abdullah's Portfolio</p>
            <ul>
                {navLinks.map(({id ,name})=>(
                    <li key={id}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>   
        </div>
        <div>
            <ul>
                {navIcons.map(({id ,img})=>(
                    <li key={id}>
                        <img className='icon-hover' src={img} alt={`icon-${id}`}  />
                    </li>
                ))}
            </ul>
            <time>{dayjs().format('dddd MMM D h:mm A')}</time>
        </div>
    </nav>
  )
}

export default Navbar