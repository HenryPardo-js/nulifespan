import React,{useEffect, useState} from "react";
import Date from "../Date";
import DueDate from "../DueDate";
import {getDate} from "../Date/fecha"
import "./Rightbar.css";

function Rightbar(props) {
  const { dueDate1Props, dueDate2Props, dueDate3Props } = props;

  // nulifespan-customer-data/<company>/<email>/
  // nulifespan-customer-dashboard/
  // nulifespan-bonuses/<company>/<nodeid>/</nodeid>
  // https://deploywk.herokuapp.com/nulifespan-customer-data/<company>/<email>/

  const [fecha,setfecha]=useState(null);
  useEffect(() => {
    setfecha(getDate());
  }, []);

  return (
    <div className="rightbar">
      <div className="earning-report-1">
        <div className="text-earning-this-month-2">
          <div className="your-earnings-this-month manrope-normal-quick-silver-18px">Your earnings this month</div>
          <div className="overlap-group-32">
            <h1 className="price-1 manrope-bold-black-60px">$2.309.68</h1>
            <p className="address manrope-normal-quick-silver-15px">{fecha}</p>
            {/* <p className="address manrope-normal-quick-silver-15px">05 Jun 2021 at 11:00 PM</p> */}
          </div>
        </div>
      </div>
      <div className="performance">
        <div className="overlap-group9">
          <div className="progress gotham-bold-eerie-black-24px">Rank Progress</div>
          <div className="meeting-with-client-2 manrope-bold-eerie-black-14px">Next Rank: President Club</div>
        </div>
        <div className="overlap-group8">
          <img className="circle" src={require("../../static/img/circle@1x.png")} />
          <div className="icon-2 border-8px-white">
            <div className="pointer">
              <div className="group-3">
                <div className="vector-container-12">
                  <img className="vector-129" src={require("../../static/img/vector-23@1x.png")} />
                  <img className="vector-130" src={require("../../static/img/vector-24@1x.png")} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="number-13">
          <div className="x01-3">
            <div className="item">
              <div className="dot"></div>
              <div className="completed manrope-normal-quick-silver-12px">Personal Sales</div>
            </div>
            <div className="text">
              <div className="overlap-group-33">
                <div className="x85741 gotham-bold-eerie-black-24px">$120</div>
                <div className="percent-1 opensans-normal-turmeric-14px">65%</div>
              </div>
            </div>
          </div>
          <div className="x02-1">
            <div className="item">
              <div className="dot-1"></div>
              <div className="ongoing-1 manrope-normal-quick-silver-12px">Downline Sales</div>
            </div>
            <div className="text-1">
              <div className="overlap-group-34">
                <div className="x23733 gotham-bold-eerie-black-24px">$230</div>
                <div className="percent-2 opensans-normal-mercury-14px">35%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="schedule">
        <div className="title">
          <div className="schedule-1 gotham-bold-eerie-black-24px">Recent Activity</div>
          <div className="thursday-january-10th-2022 opensans-semi-bold-quick-silver-16px">
            Thursday January 10th, 2022
          </div>
        </div>
        <div className="items">
          <div className="overlap-group6">
            <div className="line"></div>
            <div className="x01-4">
              <div className="overlap-group-35">
                <img className="icon-user-1" src={require("../../static/img/icon-10@1x.png")} />
              </div>
              <div className="overlap-group1-17">
                <div className="meeting-with-client manrope-bold-eerie-black-18px">Nancy Smithe</div>
                <Date />
              </div>
              <DueDate>{dueDate1Props.children}</DueDate>
            </div>
            <div className="x1000-1100 manrope-normal-turmeric-12px">Quantity 1: Ake’s Capsules</div>
          </div>
          <div className="overlap-group7">
            <div className="line-1"></div>
            <div className="x2">
              <div className="overlap-group-30">
                <img className="icon-user-1" src={require("../../static/img/icon-10@1x.png")} />
              </div>
              <div className="overlap-group2-2">
                <div className="meeting-with-client manrope-bold-eerie-black-18px">Sally Sue</div>
                <DueDate className={dueDate2Props.className}>{dueDate2Props.children}</DueDate>
                <Date />
                <div className="due-date">
                  <div className="x1000-1100-1 manrope-normal-turmeric-12px">Quantity 1: Ake’s Capsules</div>
                </div>
              </div>
            </div>
          </div>
          <div className="x3">
            <div className="overlap-group-30">
              <img className="icon-user-1" src={require("../../static/img/icon-10@1x.png")} />
            </div>
            <div className="overlap-group4-1">
              <div className="meeting-with-client manrope-bold-eerie-black-18px">Tom Jarkins</div>
              <DueDate className={dueDate3Props.className}>{dueDate3Props.children}</DueDate>
              <Date />
              <div className="x1000-1100-2 manrope-normal-turmeric-12px">Quantity 1: Ake’s Capsules</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;