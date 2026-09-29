import "./Footer.css"
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { LuMessageCircleQuestion, LuPhoneCall } from "react-icons/lu";
import { SmsEdit } from 'iconsax-react';
import { IoChevronForward, IoChevronUpSharp } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogo } from "react-icons/pi";
function Footer() {
  return (
    <>
    <footer>
        <div className="footer_top">
      <div className="container">
          <ul className='Company'>
            <h6>Company</h6>
            <li><a href="">about us</a></li>
            <li><a href="">blog</a></li>
            <li><a href="">returns</a></li>
            <li><a href="">order status </a></li>
          </ul>
          <ul className="Info">
            <h6>Info</h6>
            <li><a href="">How it works?</a></li>
            <li><a href="">our promises</a></li>
            <li><a href="">FAQ</a></li>
          </ul>
          <div className="F-topBox">
            <h6>Contact us</h6>
            <div className="footer_info">
            <div className="footer_info_icon">
            <CiLocationOn />

            </div>
            <span>123 Main Street, Anytown,USA</span>
            </div>
            <div className="footer_info">
            <div className="footer_info_icon">
              
            <LuPhoneCall />
              </div>
            <span>+1 (555) 123-4567</span>
            </div>
            <div className="footer_info">
            <div className="footer_info_icon">
              
              <SmsEdit size="20px" color="rgba(203, 203, 203, 1)" variant="Outline"/>
              </div>
              <span>TechHeimSupport@gmail.com</span>
            </div>
          </div>
          <div className="F-top_box">
            <h6>Sign up for News and updates</h6>
            <div className="F-top_input">
            <div className="user_input">
            <BiUser />
            </div>
              <input type="email" placeholder="E-mail Address"  />
              <div className="chevron_input">
              <IoChevronForward />
              </div>
            </div>
            <div className="F-top_icon">
              <div className="social">
              <AiOutlineFacebook />
              </div>
              <div className="social">
              <CiTwitter />
              </div>
              <div className="social">
              <FaInstagram />
              </div>
              <div className="social">
              <PiYoutubeLogo />
              </div>
            </div>
          </div>
          <div className="footer_box">
            <div className="message">
            <LuMessageCircleQuestion />
            </div>
            <div className="message">
            <IoChevronUpSharp />
            </div>
          </div>
        </div>
        <div className="pay">
          <div id="container">
            <img src="/imgs/paypal.svg" alt="" />
            <img src="/imgs/american express.svg" alt="" />
            <img src="/imgs/visa.svg" alt="" />
            <img src="/imgs/master card.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
        <img src="/imgs/footer_bottom.svg" alt="" />
        <ul className="cookie">
          <li><a href="">cookie settings</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Terms and Conditions </a></li>
          <li><a href="">Imprint </a></li>
        </ul>
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer