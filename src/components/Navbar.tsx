// import { ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../public/images/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Baking Bliss Logo" className="h-28 w-28" />
            <div>
              <span className="ml-2 text-3xl font-bold text-yellow-950">Baking Bliss</span>
              <br />
              <span className="ml-2 text-yellow-800 text-xl font-semibold">Cake Atelier</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link to="/" className="text-yellow-950 hover:text-yellow-700 transition-colors text-lg">Home</Link>
            <Link to="/menu" className="text-yellow-950 hover:text-yellow-700 transition-colors text-lg">Menu</Link>
            <Link to="/birthday-gallery" className="text-yellow-950 hover:text-yellow-700 transition-colors text-lg">Cakes</Link>
            <Link to="/about" className="text-yellow-950 hover:text-yellow-700 transition-colors text-lg">About</Link>
            <Link to="/contact" className="text-yellow-950 hover:text-yellow-700 transition-colors text-lg">Contact</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/share/1A9pL7RVon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-950 hover:text-[#0866FF] transition-colors"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title>
                <path fillRule="evenodd" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" clipRule="evenodd" />
              </svg>

            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/bakingblissbb/profilecard/?igsh=MTBwMmMxcXdhb202eA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-950 hover:text-pink-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.09 1.064.077 1.791.232 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.233.636.388 1.363.465 2.427.077 1.067.09 1.407.09 4.123v.08c0 2.643-.012 2.987-.09 4.043-.077 1.064-.232 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.233-1.363.388-2.427.465-1.067.077-1.407.09-4.123.09h-.08c-2.643 0-2.987-.012-4.043-.09-1.064-.077-1.791-.232-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.233-.636-.388-1.363-.465-2.427-.077-1.024-.09-1.379-.09-3.808v-.63c0-2.43.013-2.784.09-3.808.077-1.064.232-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.233 1.363-.388 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Tiktok Icon */}
            <a
              href="https://www.tiktok.com/@bakingblixx?_t=ZS-8vX21Z4dMmd&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-950 hover:text-black transition-colors"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title>
                <path fillRule="evenodd" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Buy Button - need to implement after the backend & DB */}
            {/* <button className="flex items-center px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition-colors">
              <ShoppingBasket className="h-5 w-5" />
              <span className="ml-2">Facebook</span>
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;