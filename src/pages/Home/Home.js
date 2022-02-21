import AboutCard from "../../Components/shared/Cards/AboutCard/AboutCard";
import { arrInfo } from "../../constats/about.constant";
import Button from "../../Components/shared/Button/Button";
import "./Home.css"

export default function Home() {
  return (
    <div className="main-content">
      <div className="home-page-info">
      <div className="main-pic"></div>
      <div className="main-info">
        <h4 className="test">Start 2022 in style</h4>
        <h1>Essentials Restocked</h1>
        <h4>Designed any time and every occasion</h4>
        <Button name="Shop now"></Button>
      </div>
      </div>
      <div className="about">
        {arrInfo.map((item) => (
          <AboutCard img={item.img} header={item.header} info={item.info} />
        ))}
      </div>
      </div>
  );
}
