import React from 'react'
import Link from 'next/link'
import { RiGroup2Fill,RiHome4Line } from "react-icons/ri"
import { FaUserFriends } from "react-icons/fa"
import { MdLocalMovies } from "react-icons/md"
import { CiMusicNote1 } from "react-icons/ci"
import {SlSocialSteam} from "react-icons/sl"
import {LiaInfoSolid} from "react-icons/lia"
import Sidebar from "../fix/Sidebar"

const Navbar = () => {
  return (
    <nav className='my-Box nav ' >
        <section>
            <h1 className="font-bold tracking-wider text-lg text-gray-900 font-[orb-var] " ><span className='text-red-600'>H</span>ope<span className='text-red-600'>D</span>esings</h1>
        </section>
        <section className='nav-menu' >
        <Link href="/" className="sidebar-menu-links">
          <span>Home</span>
          <span>
            <RiHome4Line size="20" />{" "}
          </span>
        </Link>
        <Link href="/Family" className="sidebar-menu-links">
          <span>Family</span>
          <span>
            <RiGroup2Fill size="20" />
          </span>
        </Link>
        <Link href="Friends" className="sidebar-menu-links">
          <span>Friends</span>
          <span>
            <FaUserFriends size="20" />
          </span>
        </Link>
        <Link href="Movies" className="sidebar-menu-links">
          <span>Movies</span>
          <span>
            <MdLocalMovies size="20" />
          </span>
        </Link>
        <Link href="Music" className="sidebar-menu-links">
          <span>Music</span>
          <span>
            <CiMusicNote1 size="20" />
          </span>
        </Link>
        <Link href="Social" className="sidebar-menu-links">
          <span>Social</span>
          <span>
            <SlSocialSteam size="20" />
          </span>
        </Link>
        <Link href="About" className="sidebar-menu-links">
          <span>About</span>
          <span>
            <LiaInfoSolid size="20" />
          </span>
        </Link>
        </section>
        <section>
            <Sidebar/>
        </section>
    </nav>
  )
}

export default Navbar