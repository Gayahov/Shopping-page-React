import './Button.css'

function Button(props) {
    let name = props.name
    return(
        <>
        <button className='btn btn-border-5'>{name}</button>
        </>
    )
};
export default Button