import React from "react";
import RankList from "../components/Ranklist";
  
const Ranks = () => {
  return (
    <div>
        <div className="row text-white">
            <div className="col-12"><h1>Ranking System</h1></div>
        </div>
        <div className="row text-white">
            <div className="col-lg-8 col-sm-12"><h2>This is the description of the ranking System</h2></div>
            <div className="col-lg-4 col-sm-12"><RankList /></div>

        </div>     
    </div>
  );
};
  
export default Ranks;