import React from "react";
  
const Home = () => {
  return (
    
    <div className="bg-primary text-white">
      <div>
        <img src="riptidecircle.png" className=""/>
        <img src="riptidegrouppic.jpg" className="w-50"/>
      </div>
      <div className="row"> 
        <div className="col-4">
          <h1 className="fw-bolder">
            Train to be the best version of you!
          </h1>
        </div>
        <div className="col-4">
          <p className="fs-4">
          RipTide Martial Arts Academy was founded in 2008 by John Juarez. After studying martial arts for the majority of his life, John felt that it was time for the next phase of his martial arts journey—passing on the knowledge he accumulated throughout his respective career. He decided to use his knowledge and background to help children and adults achieve their martial arts and fitness goals.          
        </p>
        </div>
        <div className="col-4">
          <p className="fs-4">
          John served as a US Marine for 12 years, competing at the highest level of marksmanship. His extensive knowledge of MMA has come from various training opportunities from some of the top world-renowned MMA gyms. (Xtreme Couture & American top team).          
          </p>
        </div>
      </div>  
    </div>
  );
};
  
export default Home;