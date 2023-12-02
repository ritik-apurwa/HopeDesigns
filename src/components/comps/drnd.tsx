"use client"
import React from 'react'
import { motion } from 'framer-motion'

const drnd = () => {
  return (
    <main>
        <motion.div
        initial={{x:100}}
        animate={{x:0}}
        transition={{duration:2}}
        
        >
            hello
        </motion.div>
    </main>
  )
}

export default drnd