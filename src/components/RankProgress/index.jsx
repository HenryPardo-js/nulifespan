import React from "react";
import "./RankProgress.css";

function RankProgress() {
  return (
    <div className="rank-progress">
      <div className="overlap-group6-4">
        <div className="progress-4 gotham-bold-eerie-black-18px">Rank Progress</div>
        <div className="meeting-with-client-8 manrope-bold-eerie-black-12px">Next Rank: President Club</div>
      </div>
      <div className="overlap-group7-3">
        <img className="circle-4" src={require("../../static/img/circle-2@1x.png")} />
        <div className="icon-8 border-8px-white">
          <div className="pointer-4">
            <div className="group-16">
              <div className="vector-container-26">
                <img className="vector-141" src={require("../../static/img/vector-174@1x.png")} />
                <img className="vector-142" src={require("../../static/img/vector-175@1x.png")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="number-18">
        <div className="x01-12">
          <div className="item-4">
            <div className="dot-8"></div>
            <div className="completed-4 manrope-normal-quick-silver-11px">Personal Sales</div>
          </div>
          <div className="text-10">
            <div className="overlap-group-63">
              <div className="x85741-4 gotham-bold-eerie-black-28px">$120</div>
              <div className="percent-11 opensans-normal-turmeric-10px">65%</div>
            </div>
          </div>
        </div>
        <div className="x02-5">
          <div className="item-4">
            <div className="dot-9"></div>
            <div className="ongoing-7 manrope-normal-quick-silver-11px">Downline Sales</div>
          </div>
          <div className="text-11">
            <div className="overlap-group-64">
              <div className="x23733-4 gotham-bold-eerie-black-28px">$230</div>
              <div className="percent-12 opensans-normal-mercury-10px">35%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RankProgress;
