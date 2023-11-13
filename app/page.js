"use client"
import React,{useState} from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

const page = () =>{
  const[marks,setMarks] = useState(80)
  return(
    <>
    <div id='main'>
      <Navbar />
      <Footer />
    </div>
    </>
  )
}
export default page