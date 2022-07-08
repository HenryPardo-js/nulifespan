import React from "react";
import DueDate2 from "../DueDate2";
import DueDate3 from "../DueDate3";
import "./Rightbar2.css";

function Rightbar2(props) {
  const { dueDate2Props, dueDate3Props } = props;

  return (
    <div className="rightbar-2">
      <div className="text-earning-this-month-6">
        <div className="group-12">
          <div className="your-earnings-this-month-2 manrope-normal-quick-silver-10px">Your earnings this month</div>
          <div className="overlap-group-50">
            <div className="price-5 manrope-bold-black-43px">$2.309.68</div>
            <p className="address-2 manrope-normal-quick-silver-9px">05 Jun 2021 at 11:00 PM</p>
          </div>
        </div>
      </div>
      <div className="performance-2">
        <div className="overlap-group2-4">
          <div className="progress-2 gotham-bold-eerie-black-16px">Rank Progress</div>
          <div className="meeting-with-client-6 manrope-bold-eerie-black-9px">Next Rank: President Club</div>
        </div>
        <div className="overlap-group1-28">
          <img className="circle-2" src={require("../../static/img/circle-1@1x.png")} />
          <div className="icon-6 border-8px-white">
            <div className="pointer-2">
              <div className="group-9">
                <div className="vector-container-14">
                  <img className="vector-133" src={require("../../static/img/vector-112@1x.png")} />
                  <img className="vector-134" src={require("../../static/img/vector-113@1x.png")} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="number-16">
          <div className="x01-7">
            <div className="item-2">
              <div className="dot-4"></div>
              <div className="completed-2 manrope-normal-quick-silver-9px">Personal Sales</div>
            </div>
            <div className="text-6">
              <div className="overlap-group-51">
                <div className="x85741-2 gotham-bold-eerie-black-18px">$120</div>
                <div className="percent-6 opensans-normal-turmeric-10px">65%</div>
              </div>
            </div>
          </div>
          <div className="x02-3">
            <div className="item-2">
              <div className="dot-5"></div>
              <div className="ongoing-4 manrope-normal-quick-silver-9px">Downline Sales</div>
            </div>
            <div className="text-7">
              <div className="overlap-group-52">
                <div className="x23733-2 gotham-bold-eerie-black-18px">$230</div>
                <div className="percent-7 opensans-normal-iron-10px">35%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="schedule-4">
        <div className="title-2">
          <div className="schedule-5 gotham-bold-eerie-black-16px">Recent Activity</div>
          <div className="thursday-january-10th-2022-2 opensans-semi-bold-quick-silver-11px">
            Thursday January 10th, 2022
          </div>
        </div>
        <div className="items-2">
          <div className="overlap-group6-2">
            <div className="line-4"></div>
            <div className="x01-8">
              <div className="overlap-group-53">
                <img className="icon-user-3" src={require("../../static/img/icon-11@1x.png")} />
              </div>
              <div className="overlap-group1-29">
                <div className="meeting-with-client-4 manrope-bold-eerie-black-12px">Nancy Smithe</div>
                <DueDate2>{dueDate2Props.children}</DueDate2>
                <div className="date-6">
                  <div className="calendar-2"></div>
                  <div className="date-4 manrope-normal-quick-silver-8px">January 17, 2021</div>
                </div>
                <DueDate3 />
              </div>
            </div>
          </div>
          <div className="items-item">
            <div className="overlap-group3-2">
              <img className="icon-user-3" src={require("../../static/img/icon-11@1x.png")} />
            </div>
            <div className="overlap-group2-5">
              <div className="meeting-with-client-4 manrope-bold-eerie-black-12px">Sally Sue</div>
              <div className="due-date-8">
                <div className="x1000-1100-8 manrope-normal-eerie-black-8px">Purchased</div>
              </div>
              <div className="date-7">
                <div className="calendar-3"></div>
                <div className="date-4 manrope-normal-quick-silver-8px">January 17, 2021</div>
              </div>
              <DueDate3 />
            </div>
          </div>
          <div className="line-5"></div>
          <div className="items-item">
            <div className="overlap-group5-1">
              <img className="icon-user-3" src={require("../../static/img/icon-11@1x.png")} />
            </div>
            <div className="overlap-group4-2">
              <div className="meeting-with-client-4 manrope-bold-eerie-black-12px">Tom Jarkins</div>
              <div className="due-date-9">
                <div className="x1000-1100-9 manrope-normal-eerie-black-8px">New Distributer</div>
              </div>
              <div className="date-8">
                <div className="flex-row-4">
                  <div className="calendar-4"></div>
                  <div className="date-9 manrope-normal-quick-silver-8px">January 17, 2021</div>
                </div>
                <DueDate3 className={dueDate3Props.className} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar2;
