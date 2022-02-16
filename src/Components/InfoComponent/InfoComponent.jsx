import Button from "../shared/Button/Button";
import "./InfoComponent.css";
import img1 from "../../assets/121.jpg";
import img2 from "../../assets/122.jpg";
import img3 from "../../assets/123.jpg";

function InfoComponent() {
  const arrInfo = [
    {
      id: 1,
      img: img2,
      header: "Modular Packaging",
      info: "Unboxing like never before",
    },
    { id: 2, img: img1, header: "Who are we", info: "Our journey explained" },
    {
      id: 3,
      img: img3,
      header: "Modular Packaging",
      info: "Unboxing like never before",
    },
  ];

  let infoArr = arrInfo.map((item) => {
    return (
      <div className="info-box" key={arrInfo.id}>
        <img src={item.img} alt={item.header} />
        <div className="info-div">
          <h4>{item.header}</h4>
          <p>{item.info}</p>
          <Button name="Read story"></Button>
        </div>
      </div>
    );
  });
  return <div className="info-box2">{infoArr}</div>;
}
export default InfoComponent;
