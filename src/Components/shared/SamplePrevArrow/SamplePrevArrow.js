function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position: "block", zIndex:"1" }}
        onClick={onClick}
      />
    );
  }
  export default SamplePrevArrow;