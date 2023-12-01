"use client"
import React from 'react'
import {motion} from "framer-motion"

const page = () => {
  return (
    <main className='main-div  ' >
      <motion.div
      initial={{x:100}}
      animate={{x:0}}
      transition={{duration:2}}
      
      >
        <h1 className='font-bold text-4xl text-[seagreen] ' >Watching what a problem i am really facing there are tow many problems that i know i will face so i want to know that  Again Fir That all I want </h1>
      </motion.div>
    </main>
  )
}

export default page