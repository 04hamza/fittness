import React from 'react'
import './Footer.css'
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>

       
       <div className='container-footer'>
             <nav className='nav-footer'>
                   <ul className='ul-footer'>
                       <li><Link className='link-footer'>Rejoindre Fitness Park Group</Link></li>
                       <li><Link className='link-footer'>Aide & Informations</Link></li>
                       <li><Link className='link-footer'>Clubs</Link></li>
                       <li><Link className='link-footer'>Activités</Link></li>
                   </ul>
             </nav>
             <nav className='nav-footer-1'>
                   <ul className='ul-footer-1'>
                       <li><Link className='link-footer-1'>Proposer un local</Link></li><br />
                       <li><Link className='link-footer-1'>Devenir Franchisé</Link></li><br />
                       <li><Link className='link-footer-1'>Devenir Master Franchisé</Link></li><br />
                       <li><Link className='link-footer-1'>Offre spéciale entreprise</Link></li><br />
                       <li><Link className='link-footer-1'>Recrutement</Link></li>
                     
                   </ul>
             </nav>

             <nav className='nav-footer-2'>
                   <ul className='ul-footer-2'>
                       <li><Link className='link-footer-2'>FAQ</Link></li><br />
                       <li><Link className='link-footer-2'>Abonnements</Link></li><br />
                       <li><Link className='link-footer-2'>Envie d'essayer nos salles ?</Link></li><br />
                       <li><Link className='link-footer-2'>Contact</Link></li><br />
                   </ul>
             </nav>
             <nav className='nav-footer-3'>
                   <ul className='ul-footer-3'>
                       <li><Link className='link-footer-3'>Bordeaux</Link></li><br />
                       <li><Link className='link-footer-3'>Lille</Link></li><br />
                       <li><Link className='link-footer-3'>Lyon</Link></li><br />
                       <li><Link className='link-footer-3'>Marseille</Link></li><br />
                       <li><Link className='link-footer-3'>Nantes</Link></li><br />
                       <li><Link className='link-footer-3'>Nice</Link></li><br />
                       <li><Link className='link-footer-3'>Nîmes</Link></li><br />
                       <li><Link className='link-footer-3'>Paris</Link></li><br />
                       <li><Link className='link-footer-3'>Perpignan</Link></li><br />
                       <li><Link className='link-footer-3'>Rennes</Link></li><br />
                       <li><Link className='link-footer-3'>Strasbourg</Link></li><br />
                       <li><Link className='link-footer-3'>Troyes</Link></li><br />
                       <li><Link className='link-footer-3'>Toulouse</Link></li><br />
                   </ul>
             </nav>
             <nav className='nav-footer-4'>
                   <ul className='ul-footer-4'>
                       <li><Link className='link-footer-4'>Fight Park</Link></li><br />
                       <li><Link className='link-footer-4'>Burning Park</Link></li><br />
                       <li><Link className='link-footer-4'>Cycle Park</Link></li><br />
                       <li><Link className='link-footer-4'>Cross training</Link></li><br />
                       <li><Link className='link-footer-4'>Cardio training</Link></li><br />
                       <li><Link className='link-footer-4'>Cours collectifs</Link></li><br />
                       <li><Link className='link-footer-4'>Musculation</Link></li><br />

                   </ul>
             </nav>
             <div className='icons-footer'>
              <a href="https://web.facebook.com/fitnessparkofficiel/?_rdc=1&_rdr" target='blank'> <BsFacebook className='icon-footer' /> </a>     
              <a href='https://www.instagram.com/fitnessparkofficiel/' target='blank'><FaInstagram className='icon-footer'/></a>
              <a href="https://www.youtube.com/channel/UC13OxvvHFIPK_zFLY5VVbcw" target='blank'> <IoLogoYoutube className='icon-footer'/></a>
              <a href="https://x.com/FitnessParkFR" target='blank'> < FaXTwitter className='icon-footer'/></a>
              <a href="https://www.threads.net/@fitnessparkofficiel" target='blank'> <MdAlternateEmail className='icon-footer'/></a>
          
             </div>

       </div>
      
    
    
    
    </>
  )
}
