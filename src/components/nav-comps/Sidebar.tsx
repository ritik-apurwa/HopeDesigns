"use client"
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { LiaHomeSolid } from "react-icons/lia";
import { PiPersonSimpleBikeBold } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi";
import { SiGooglehome } from "react-icons/si";
import { RiHome4Line } from "react-icons/ri";
import { RiGroup2Fill } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";
import { SlSocialSteam } from "react-icons/sl";
import { LiaInfoSolid } from "react-icons/lia";
import { FaChevronDown,FaUserFriends } from "react-icons/fa";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <main>
    <section>
      {isOpen ? (
        <button onClick={toggleSidebar} className="toggle-btn">
          <AiOutlineClose size="18" />
        </button>
      ) : (
        <button onClick={toggleSidebar} className="toggle-btn">
          <AiOutlineMenu className="toggle-icon" size="18" />
        </button>
      )}
    </section>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="sidebar-content"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/"
              onClick={toggleSidebar}
              className="sidebar-menu-links"
            >
              <span className="icons-logos ">
                <span>Home</span>

                <span>
                  <RiHome4Line size="20" />
                </span>
              </span>
              <span>
                <FaChevronDown size="15" />
              </span>
            </Link>
            <Link
              href="Family"
              onClick={toggleSidebar}
              className="sidebar-menu-links"
            >
              <span className="icons-logos">
                <span>Family</span>
                <span>
                  <RiGroup2Fill size="20" />
                </span>
              </span>
              <span>
                <FaChevronDown size="15" />
              </span>
            </Link>
            <Link
              href="Friends"
              onClick={toggleSidebar}
              className="sidebar-menu-links"
            >
              <span className="icons-logos">
              <span>Friends</span>
              <span>
                <FaUserFriends size="20" />
              </span>
              </span>

              <span>
                <FaChevronDown size="15" />
              </span>
            </Link>
            <Link
              href="Movies"
              onClick={toggleSidebar}
              className="sidebar-menu-links"
            >
              <span className="icons-logos">
              <span>Movies</span>
              <span>
                <MdLocalMovies size="20" />
              </span>
              </span>
              <span>
                <FaChevronDown size="15" />
              </span>
            </Link>
            <Link
              href="Music"
              onClick={toggleSidebar}
              className="sidebar-menu-links"
            >
              <span className="icons-logos">
              <span>Music</span>
              <span>
                <CiMusicNote1 size="20" />
              </span>
              </span>
              <span>
                <FaChevronDown size="15" />
              </span>
            </Link>
            <Link
              href="Social"
              onClick={toggleSidebar}
              className="sidebar-menu-links"
            >
              <span className="icons-logos">
              <span>Social</span>
              <span>
                <SlSocialSteam size="20" />
              </span>
              </span>
              <span>
                <FaChevronDown size="15" />
              </span>
            </Link>
            <Link
              href="About"
              onClick={toggleSidebar}
              className="sidebar-menu-links"
            >
              <span className="icons-logos">
              <span>About</span>
              <span>
                <LiaInfoSolid size="20" />
              </span>
              </span>
              <span>
                <FaChevronDown size="15" />
              </span>
            </Link>
           
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  </main>
  )
}

export default Sidebar