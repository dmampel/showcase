import { useRef } from 'react'
import { marqueeItems } from '../data/projects'

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'
  }

  const handleMouseLeave = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running'
  }

  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <div className="marquee-wrap">
      <div className="marquee">
        <div
          className="marquee__track"
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {doubled.map((item, i) => (
            <span key={i}>
              {item}
              {i < doubled.length - 1 && <span className="star"> ✦</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
