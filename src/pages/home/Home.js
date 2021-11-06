import React from "react";
import Chart from "../../charts/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Home.css";
import data from "../../charts/data";
import WidgetLarge from "../../components/widgets/widgetLarge/WidgetLarge";
import WidgetSmall from "../../components/widgets/widgetSmall/WidgetSmall";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={data} title="User Analytics" grid dataKey="ActiveUser" />
      <div className="home-widgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
