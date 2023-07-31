import React from 'react'
import {motion} from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";




const Home = () => {
  return(
<>
<section className="home">
    <div> 
    <motion.h1
    initial={{x:"-100%", opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay: 0.2}}>MBA BURGER WALA</motion.h1>
  
    <motion.p
    initial={{x:"-100%", opacity:0}} whileInView={{x:0,opacity:1}}>Give Yourself a Tasty Burger.</motion.p>
    </div>
    <motion.a 
    initial={{y:"-100%", opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay: 0.2}}
    href="#menu" >Explore Menu</motion.a>
  </section>
  <Founder />
  <Menu />
</>
  );
};

export default Home;
