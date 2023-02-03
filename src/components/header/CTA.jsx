import React from 'react';
import Champion_Antonio_SE_Resume from '../../assets/Champion_Antonio_SE_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Champion_Antonio_SE_Resume} download className='btn'>Checkout resume</a>
        <a href="#contact" className='btn btn-primary'>Let's connect!</a>
    </div>
  )
}

export default CTA