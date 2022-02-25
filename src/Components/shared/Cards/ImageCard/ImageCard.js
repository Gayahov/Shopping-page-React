import "./ImageCard.css"


export default function ImageCard({img}) {
    return (
        <div className="image-box" >
          <img src={require(`../../../../assets/${img}`)}  />
        </div>
      );
}