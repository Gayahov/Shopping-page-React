import './Header.css'

function  Header()  {
    return (
        <nav>
        <div className='logo'> <h1>E T Q .</h1></div>
        <div className='menu-bar'>
            <ul>
                <li>Shop All</li>
                <li>Sale</li>
                <li>Shoecare</li>
            </ul>
            <ul>
                <li>Search</li>
                <li>Help</li>
                <li>My account</li>
            </ul>
            

        </div>
        <div className='shopping-cart'> <p>0</p></div>
        </nav>
    )
};

export default Header