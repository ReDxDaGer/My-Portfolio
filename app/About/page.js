import Footer from "@/Components/Footer"
import Navbar from "@/Components/Navbar"
import { gsap } from "gsap/gsap-core"
// const 
const About =()=>{
    return(
        <>
        <Navbar/>
        <div id="Abtmain">
            <div className="header">
                <h1>Hey there,<br /> I'm Yash Mehrotra! 👋</h1>
                <h2>A front-end developer with a unique skill set. I'm well-versed in React, Next.js, JavaScript, and Python, while also pursuing a BS degree in data science at IIT Madras. Beyond coding, I'm a graphic designer and a strong communicator. I've participated in numerous hackathons and built a diverse array of projects that demonstrate my skills. You can find my work on [GitHub](Your GitHub Profile Link) and connect with me on [LinkedIn](Your LinkedIn Profile Link). Let's collaborate to create exceptional digital experiences! 🚀💡🎨</h2>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default About