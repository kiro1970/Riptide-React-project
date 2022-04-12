import React from "react";
import ClassSession from "../components/ClassSession";

  
const Ranks = () => {
  return (
    <div>
        <div className="row text-white">
            <div className="col-12"><h1>Classes</h1></div>
        </div>
        <div className="row text-white">
            <div className="col-lg-5 col-sm-12"><ClassSession/></div>
            <div className="col-lg-7 col-sm-12">
              <h2>This is the description of the classes offered at RipTide</h2>
              <ul>             
                <h2>Muay Thai Kickboxing</h2>
                <li>
                Muay Thai is a martial art derived from the ancient battlefield  arts of  Thailand. Unlike ordinary  kickboxing, Muay Thai permits  strikes with the knees and the elbows, as  well as punches and kicks.  Muay Thai bouts feature a lot of kicks to the  legs to slow down an  opponent, as well as a lot of clinch work. Clinch  work is a Muay Thai  specialty in which you control your opponent's upper body with your arms  in order to land knees and elbows or to trow them to the mat. 
                </li>
                <h2>Brazilian Jiu-Jitsu</h2>
                <li>
                Our instructors met and trained with the  eldest brother and founder of the organization, ninth-degree black belt  Carlos Machado. For over 40 years,  The Machado Brothers have been dedicated to Brazilian Jiu-Jitsu. All  five are living legends in the art. RCJ Machado Jiu-Jitsu believes the  practice of martial arts, specifically Brazilian Jiu-Jitsu, has the  ultimate goal of providing students with a tool to improve themselves as  individuals by adopting a healthier and more balanced lifestyle.                 </li>
                <h2>Wrestling</h2>
                <li>
                
                </li>
              </ul>

            </div>

        </div>     
    </div>
  );
};
  
export default Ranks;