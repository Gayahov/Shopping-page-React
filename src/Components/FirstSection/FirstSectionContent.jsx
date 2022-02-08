import Button from '../Button/Button';
import './FirstSectionContent.css';

function FirstSectionContent() {
   
    return(
        <div className='main-content'>
            <div className='main-pic'></div>
            <div className='main-info'>
                <h4>Start 2022 in style</h4>
                <h1>Essentials Restocked</h1>
                <h4>Designed any time and every occasion</h4> 
                <Button name= "Shop now"></Button>
            </div>
            
        </div>
    )
}
 export default FirstSectionContent