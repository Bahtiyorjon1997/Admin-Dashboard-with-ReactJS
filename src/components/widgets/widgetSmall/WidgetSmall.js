import React from "react";
import "./WidgetSmall.css";
import { Visibility } from "@material-ui/icons";

const WidgetSmall = () => {
  return (
    <div className="widget-small">
      <span className="widget-small-title">User Details</span>
      <ul className="widget-small-list">
        <li className="widget-small-list-item">
          <img
            src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
            alt=""
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-user-name">Alan Farad</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility />
            <span>Display</span>
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
            alt=""
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-user-name">Alan Farad</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility />
            <span>Display</span>
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
            alt=""
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-user-name">Alan Farad</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility />
            <span>Display</span>
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
            alt=""
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-user-name">Alan Farad</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility />
            <span>Display</span>
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
            alt=""
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-user-name">Alan Farad</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility />
            <span>Display</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
