import React from "react";
import "./WidgetLarge.css";

const Button = ({ type }) => {
  return <button className={"widget-large-table-btn" + type}>{type}</button>;
};

const WidgetLarge = () => {
  return (
    <div className="widget-large">
      <h3 className="widget-large-title">Largest Transactions</h3>
      <table className="widget-large-table">
        <tr className="widget-large-table-row">
          <th className="widget-large-table-th">Customer</th>
          <th className="widget-large-table-th">Date</th>
          <th className="widget-large-table-th">Amount</th>
          <th className="widget-large-table-th">Status</th>
        </tr>
        <tr className="widget-large-table-row">
          <td className="widet-large-table-td">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="widget-large-table-img"
            />
            <span className="widget-large-table-name">Susan Carol</span>
          </td>
          <td className="widget-large-table-date">24.11.2021</td>
          <td className="widget-large-table-amount">122$</td>
          <td className="widget-large-table-status">
            <Button type="Activated" />
          </td>
        </tr>
        <tr className="widget-large-table-row">
          <td className="widet-large-table-td">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="widget-large-table-img"
            />
            <span className="widget-large-table-name">Susan Carol</span>
          </td>
          <td className="widget-large-table-date">24.11.2021</td>
          <td className="widget-large-table-amount">122$</td>
          <td className="widget-large-table-status">
            <Button type="Diactivated" />
          </td>
        </tr>
        <tr className="widget-large-table-row">
          <td className="widet-large-table-td">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="widget-large-table-img"
            />
            <span className="widget-large-table-name">Susan Carol</span>
          </td>
          <td className="widget-large-table-date">24.11.2021</td>
          <td className="widget-large-table-amount">122$</td>
          <td className="widget-large-table-status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widget-large-table-row">
          <td className="widet-large-table-td">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="widget-large-table-img"
            />
            <span className="widget-large-table-name">Susan Carol</span>
          </td>
          <td className="widget-large-table-date">24.11.2021</td>
          <td className="widget-large-table-amount">122$</td>
          <td className="widget-large-table-status">
            <Button type="Activated" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
