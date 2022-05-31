import React from "react";
import './FooterListing.css';


const Footer = () =>{
    return(
            <>
                <div id="footerListing">
                    <center>
                        <div id="social_media">
                            <h3 style={{fontFamily: 'sans-serif', color: 'white'}}>Connect us through Social Media</h3>

                            <a href="https://www.instagram.com/harish._.26/" style={{fontSize: '40px', color: 'white', marginRight: '10px'}} target="_blank" rel="noreferrer"><i class="fab fa-instagram-square"></i></a>

                            <a href="https://www.youtube.com/channel/UCBP3nX5ruhAE0ITqZOohVPg" style={{fontSize: '40px', color: 'white',marginRight: '10px'}} target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i></a>

                            <a href="https://twitter.com/Pbharish5" style={{fontSize: '40px', color: 'white'}} target="_blank" rel="noreferrer" ><i class="fab fa-twitter-square"></i></a>
                        </div>

                        <hr style={{color: 'white', width:' 25%',border:'1px white solid'}}/>
                        <div id="links">

                            <h3 style={{fontFamily: 'sans-serif', color: 'white',  marginBottom: '10px', marginTop: '5px'}}>Also go through my other sites:</h3>
                            
                            <a href="https://pinnepalliharish.github.io/zomato_homepage/" target="_blank" rel="noreferrer"  id="zomato_link">Zomato Like Website</a>

                            <span style={{color: 'white', marginLeft: '14px', fontSize: '30px'}}>|</span>

                            <a href="https://pinnepalliharish.github.io/profile_website/" target="_blank" rel="noreferrer" id="profile_link">My Profile Website</a>

                        </div>
                        
                        <hr style={{color: 'white', width: '50%',border:'1px white solid'}}/>

                        <p id="cpyryt_line" style={{fontFamily: 'sans-serif', color: 'white'}}>Copyright © 2022 Booking.im. All rights reserved.</p>
                        <p id="site_caution_line" style={{fontFamily:' sans-serif', color: 'white', margin: 0}}>(This site is made just as practice to my Web Development Technology course / Internship.)  </p>
                        <br/>
                        <a href="https://pinnepalliharish.github.io/booking.im_first_page/" id="gototop" ><b>Go to Main Page</b></a>
                        <br/>    
                    </center>
                </div>
            </>
    )
}

export default Footer;