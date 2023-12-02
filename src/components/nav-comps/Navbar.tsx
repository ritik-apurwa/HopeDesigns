import React from 'react'
import Link from 'next/link'
import Sidebar from './Sidebar'
import NavMenu from './NavMenu'

const Navbar = () => {
  return (
    <nav className='nav' >
        <section className='flex flex-row-reverse h-12 justify-center items-center' >
        <h1 className="font-bold tracking-wider text-lg text-gray-900 font-[orb-var] " ><span className='text-red-600'>H</span><span className='text-blue-950' >ope</span><span className='text-red-600'>D</span><span className='text-blue-950'>esigns</span> </h1>  
        <div className='lg:hidden' ><Sidebar/></div>
        </section>
        <section className='' >
          <NavMenu/>
        </section>
    </nav>
  )
}

export default Navbar