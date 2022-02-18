import "./ShoppingButton.css"


function ShoppingButton(props){
    let buttonName = props.buttonName
    return(
        <>
        <button className="shopping-button">{buttonName}</button>
        </>
    )
}
export default ShoppingButton;