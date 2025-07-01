import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterestP,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaInstagram,
  FaStore,
  FaCartPlus,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className=" px-4 rounded-2xl bg-gradient-to-r from-[#1A1A2E] via-[#142144] to-[#1b67c4] text-white py-10 ">
      <div className=''>

     
        <div className='flex justify-center flex-col items-center my-3  '>
            <div>
                 <div className="flex items-center gap-2 text-primary text-4xl font-bold">
                    
                       <FaStore className="text-accent" />
                      <span className="tracking-wide">
                        <span className="text-accent">Brim</span>mart
                      </span>
                    </div>

            </div>
         
        </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold mb-3">OUR STORES</h3>
          <ul className="space-y-2 text-sm">
            <li>Dhaka</li>
            <li>Khulna</li>
            <li>Chattragram</li>
            <li>Stylet</li>
            <li>Rajshahi</li>
            
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">INFORMATION</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to='/category'>Categories</Link></li>
            <li><Link to='/allProducts'>All Products</Link></li>
            <li><Link to='/myProducts'>My Products</Link></li>
            <li><Link to='/cart'><span><FaCartPlus size={24} /></span></Link></li>
            
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">FOOTER MENU</h3>
          <ul className="space-y-2 text-sm">
            <li>Instagram profile</li>
            <li>New Collection</li>
            <li>Woman Dress</li>
            <li>Contact Us</li>
            <li>Purchase Theme</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">ABOUT THE STORE</h3>
          <p className="text-sm mb-3">
            STORE – worldwide fashion store since 1978. We sell over 1000+ branded products on our website.
          </p>
          <p className="text-sm">📍 451 Wall Street, Dhaka, Bangladesh</p>
          <p className="text-sm">📞 (+880) 01889359904</p>
          <div className="flex space-x-3 mt-3 text-xl">
          <Link to='https://www.facebook.com/share/19X5uHhg7K/'>
            <FaFacebookF />
          </Link>
         <Link to='https://x.com/Mhriyan87'>   <FaTwitter /></Link>
          <Link to='hossainmdmafuj17@gmail.com'>  <FaEnvelope /></Link>
         
            <Link to='https://www.linkedin.com/in/md-mahafuj-hossain-4ba36220a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedinIn /></Link>
            <Link to='https://wa.me/qr/FYQC6EXQ33XED1'> <FaWhatsapp></FaWhatsapp> </Link>
          </div>
          <div className="flex space-x-2 mt-4 text-3xl">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcAmex />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm">
        <p>©2025 Created by <span className="text-primary font-semibold">XTemos Studio</span>. Premium e-commerce themes.</p>
      </div>
       </div>
    </footer>
  );
};

export default Footer;
