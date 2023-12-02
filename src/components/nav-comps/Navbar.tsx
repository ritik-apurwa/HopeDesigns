import React from 'react'
import Link from 'next/link'
import Sidebar from './Sidebar'
import NavMenu from './NavMenu'

const Navbar = () => {
  return (
    <nav className='nav ' >
        <section>
        <h1 className="font-bold tracking-wider text-lg text-gray-900 font-[orb-var] " ><span className='text-red-600'>H</span>ope<span className='text-red-600'>D</span>esigns</h1>  
        </section>
        <section className='' >
          <NavMenu/>
        </section>
        <section className='lg:hidden ' >
            <Sidebar/>
        </section>
    </nav>
  )
}

export default Navbar