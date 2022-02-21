import Button from "../../../Components/shared/Button/Button";
import ShoppingButton from "../../../Components/shared/ShoppingButton/ShoppingButton";
import "./MyAccount.css"

function MyAccount(){
    return (
        <div className="account-description">
            <div className="account-info">
                <p>Create an account or log in to view your orders, return or adjust your personal information.</p>
            </div>
            <div className="button_container">
                <Button name="Create account"></Button>
                <ShoppingButton buttonName="Login"></ShoppingButton>
            </div>
        </div>
    )
}

export default MyAccount;