import React from 'react'
import "./Shape.css"
import shape from "../../assets/png/shape-bg.png"
export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src = {shape}/>
        </div>
    </div>
  )
}
