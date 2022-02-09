import { useRef, useState, useEffect } from "react";
import './Carousel.css';




const Carousel = () => {
const TOTAL_SLIDES = 3
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  
  const next = () => {
    if ( current >= TOTAL_SLIDES ) return
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
          <div className='box1'></div>
          <div className='box2'></div>
          <div className='box3'></div>

          
        </div>
      </div>
      <div className='button-container'>
        <div className='button' onClick={prev}>Left</div>
        <div className='button' onClick={next}>Right</div>
      </div>
      <div className='button-2-container'>
        {/* {[0, 1, 2, 3].map(num => (
          <div
            className={`button-2 ${num === current && 'active'}`}
            onClick={desired}
            id={num}
            key={num}
          />
        ))} */}
      </div>
    </div>
  )
}
export default Carousel;