import "./AboutCard.css"
import Button from "../../Button/Button";
import { arrInfo } from "../../../../constats/about.constant";

export default function AboutCard({img, header, info }) {
    return (
        <div className="info-box" key={arrInfo.id}>
          <img src={require(`../../../../assets/${img}`)} alt={header} />
          <div className="info-div">
            <h4>{header}</h4>
            <p>{info}</p>
            <Button name="Read story"></Button>
          </div>
        </div>
      );
}