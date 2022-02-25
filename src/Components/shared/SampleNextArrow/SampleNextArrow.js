import "./SampleNextArrow.css"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, }}
        onClick={onClick}
      />
    );
  }
export default SampleNextArrow;