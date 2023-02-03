import React from 'react'
import propTypes from 'prop-types'

import './index.scss'
export default function Star({value, height, width, spacing, className}) {
    const decimals = Number(value) % 1
    const star = []
    let leftPost = 0

    for (let index = 0; index < 5 && index < value - decimals; index++) {
        leftPost = leftPost + width
        star.push(
            <div 
                className='star' 
                key={`star-${index}`} 
                style={{ 
                    left: index * width,
                    width : width,
                    marginRight: spacing,
                    height: height
                }}>
            </div>
        )
    }

    if (decimals > 0 && value <= 5) {
        star.push(
            <div 
                className='star' 
                key={`starWithDecimal`} 
                style={{ 
                    left: leftPost,
                    width : decimals * width,
                    marginRight: spacing,
                    height: height
                }}>
            </div>
        )
    }

    const starPlaceholder = []
    for (let index = 0; index < 5; index++) {
        starPlaceholder.push(
            <div 
                className='star placeholder' 
                key={`starPlaceholder-${index}`} 
                style={{ 
                    left: index * width,
                    width : width,
                    marginRight: spacing,
                    height: height
                }}>
            </div>
        )
    }
    
    return (
      <>
        <div className={['stars', className].join(" ")} style={{ height : height }}>
            {starPlaceholder}
            {star}
        </div>
      </>
  )
}

Star.propTypes = {
    clasName: propTypes.string,
    value: propTypes.number,
    width: propTypes.number,
    height: propTypes.number,
    spacing: propTypes.number
}