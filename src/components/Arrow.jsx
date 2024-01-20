import React from 'react'
import '../index.css'
function Arrow(props) {
  return (
    <svg width="100" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: props.direction === 'left' ? 'rotate(180deg)' : 'none',transition: 'transform 0.4s ease-in-out'}}>
      <path d="M1 12H25M1 12L10 6M1 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default Arrow
