"use client"
import Link from "next/link"
import { useState } from "react"
const Navbar =() =>{
    return(
        <>
        <div id='navbar'>
            <div id="navleft"></div>
            <div id='navright'>
                <Link href = '/'>Home</Link>
                <Link href = '/About'>About</Link>
                <Link href = '/Skills'>Skills</Link>
                <Link href = '/Projects'>Projects</Link>
            </div>
        </div>
        </>
    )
} 
export default Navbar