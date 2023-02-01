import "./about.css";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";

export default function About() {


    
    return (

        <div className="Container" >
            <Announcement/>
            <Navbar/>
              
   
            <div className="Wrapper">
                <div className="Left">
                  
                    <h2>ABOUT US </h2>
                    <h4> La société Hygiene Plus®  sarl  connue sous l'appelation Hygiene Plus- BIOCIDE  est une entreprise industrielle d’AGROCHIMIE (API 200604), son siège social est basé à Tunis depuis Avril 2006 .

                        Hygiene Plus® a pour mission la formulation  des produits de lutte anti-nuisibles (raticides,insecticides et désinfectants).

                        Nos produits phares sont CracK Rodent® Plus et CracK Rodent® sont homologués à usage de l’ hygiène publique par le Ministère de la Santé

                        Nos marques Déposées :  Société Hygiene Plus® , CracK® et CracK Rodent®  à l'échelle internationale.</h4>
                   
                    
                </div>
                <div className="Center">

                <h2>Contact</h2>
                    <h4>
                        HYGIENE PLUS   s.a.r.l.
                        14 bis rue Ibn Abi Rahal
                        Cite Olympique 1003
                        Tunis - TUNISIE
                    </h4>

                    <h4>tel: (+216) 71.806.367  <br />    52.806.367 <br /> fax : (+216) 71.806.410</h4>  

                  
                    <h4> hygieneplus.tunisia@gmail.com       </h4>
             

                </div>
                <div className="Right">
                <div className="contact-box">

<div className="right">
    <h2>Contact Us</h2>
    <input type="text" className="field" placeholder="Your Name" />
    <input type="text" className="field" placeholder="Your Email"/>
    <input type="text" className="field" placeholder="Phone"/>
    <textarea placeholder="Message" className="field"></textarea>
    <button className="btn">Send</button>
</div>
</div>
                </div>
            </div>
        </div>

    );
}
