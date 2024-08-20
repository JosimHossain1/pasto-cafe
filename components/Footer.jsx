import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className='footer p-10 bg-[#251a12] text-white text-base-content grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-3  px-6 md:px-10 lg:px-24 poppins-regular'>
        <aside>
          <Link href='/'>
            <Image
              src='https://i.ibb.co/gVW6HmM/pasto-logo.png'
              width={70}
              height={70}
            />
          </Link>

          <p>
            At Pasto, our passion for coffee goes beyond the cup. Founded by a
            team of coffee enthusiasts, we are dedicated to sourcing ethically
            grown beans from around the world. Our mission is to create a space
            where community, quality, and sustainability come together.
          </p>
        </aside>

        <nav className='flex justify-between'>
          <div className='space-y-3 flex flex-col'>
            <h6 className='footer-title'>Quick Link</h6>

            <Link href='/' className='link link-hover'>
              Home
            </Link>
            <Link href='/dashboard' className='link link-hover'>
              dashboard
            </Link>
            <Link href='/login' className='link link-hover'>
              Login
            </Link>
            <Link href='/registration' className='link link-hover'>
              Registration
            </Link>
          </div>

          <div className='flex flex-col space-y-3'>
            <h6 className='footer-title'>Legal</h6>
            <a className='link link-hover'>Terms of use</a>
            <a className='link link-hover'>Privacy policy</a>
            <a className='link link-hover'>Cookie policy</a>
          </div>
        </nav>
        <nav>
          <h6 className='footer-title'>Contact US</h6>
          <ul className='contact-list space-y-3'>
            <li className='items-center flex space-x-2'>
              {/* <FaPhone /> */}
              <span>+880130*****88</span>
            </li>
            <li className='flex items-center space-x-2'>
              {/* <FaEnvelope /> */}
              <span>contact.door2door@gmail.com</span>
            </li>
            <li className='items-center flex space-x-2'>
              {/* <FaMapMarkerAlt /> */}
              <span>Dhanmondi 32, Dhaka</span>
            </li>
          </ul>
        </nav>
      </footer>

      {/* Bootm Footer */}
      <footer className='text-center py-4 bg-[#1b130d] text-white px-6 md:px-10 lg:px-22'>
        <span className='poppins-regular'>
          © This site developed by 
          <Link href='https://josim-hossain.vercel.app/'  className='underline ml-1'>
             Josim Hawladar
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
