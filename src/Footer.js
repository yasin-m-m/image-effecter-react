import React from 'react'

const Footer = () => {
    const date=new Date();
    const year = date.getFullYear();
  return (
    <div className='footer'>CopyRight &copy; {year} Project by <a href="https://www.linkedin.com/in/yasinmm/" target='_blank' style={{color:"white"}}>Yasin M M</a></div>
  )
}

export default Footer