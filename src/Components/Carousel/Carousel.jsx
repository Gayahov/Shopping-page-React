import { useRef, useState, useEffect } from "react";
import './Carousel.css';

const Carousel = () => {
    const total_slide = 2 
    const [current, setCurrent] = useState(0)
    const ref = useRef(null)
    
    const next = () => {
      if ( current >= total_slide ) return
      else setCurrent(current + 1)
    }
    
    const prev = () => {
      if ( current === 0 ) return
      else setCurrent(current - 1)
    }
    
    useEffect(() => {
      ref.current.style.transition = 'all 0.2s ease-in-out'
      ref.current.style.transform = `translateX(-${current}00%)`
    }, [current])
    return (
      <div className='wrapper'>
        <div className='frame'>
          <div className='box-container' ref={ref}>
            <div className='box'><img src={require("../assets/blacksh2.jpg")}></img></div>
            <div className='box'><img src={require("../assets/blacksh1.png")}></img></div>
            <div className='box'><img src={require("../assets/blacksh3.jpg")}></img></div>
          </div>
        </div>
        <div className='button-container'>
          <div className='button' onClick={prev}>left</div>
          <div className='button' onClick={next}>right</div>
        </div>
      </div>
    )
  }
  
export default Carousel;