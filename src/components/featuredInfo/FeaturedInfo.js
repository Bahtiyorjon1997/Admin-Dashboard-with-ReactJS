import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./FeaturedInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revenue</span>
        <div className="featured-money-container">
          <span className="featured-money">$2,415</span>
          <span className="featured-money-rate">
            - 11.4 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$1,411</span>
          <span className="featured-money-rate">
            + 1.5 <ArrowUpward className="featured-icon" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$3,110</span>
          <span className="featured-money-rate negative">
            - 3.8 <ArrowDownward className="featured-icon negative" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
