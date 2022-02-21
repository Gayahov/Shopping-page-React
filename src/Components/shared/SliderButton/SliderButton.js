import "./SliderButton.css"

 function SliderButton({arrow, onClick, className}) {
    console.log(className)
    return (
        <div className={className} onClick={onClick}>
            {arrow}
        </div>
    )
}
export default SliderButton