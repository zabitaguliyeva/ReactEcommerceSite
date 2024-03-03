import React from 'react'
import { Link } from 'react-router-dom'
import notFound from "../assets/images/notFound.png"
const NotFound = () => {
  return (
   <section className="notFound">
<div className="container">
    <div className="row">
        <div className="textGroup">
        <h1 className="notFoundTitle">404</h1>
        <p className='notFoundText'>Sorry, we couldn't find this page. But don't worry, you can find plenty of other things on our <Link to='/' className='homepage'> homepage </Link></p>
        </div>
    <div className="notFoundImgContainer">
            <img src={notFound} alt="not found" />
            </div>
        
    </div>
</div>
   </section>
  )
}

export default NotFound