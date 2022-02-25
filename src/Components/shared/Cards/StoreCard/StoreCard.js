import "./StoreCard.css"
import { storeInfo } from "../../../../constats/store.constant";


export default function StoreCard({img, header, info }) {
    return (
        <div className="store-img" key={storeInfo.id}>
          <img src={require(`../../../../assets/${img}`)} alt={header} />
          <div className="store-info">
            <h4>{header}</h4>
            <p>{info}</p>
          </div>
        </div>
      );
}