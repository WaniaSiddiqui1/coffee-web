import React from 'react';

 import Link from 'next/link';

 const Navbar = () => {
    return (
      <nav className="bg-yellow-900 h-30 py-5 px-6">
        <div className="container mx-auto flex justify-between items-center h-full w-full max-w-screen-xl">
          <h1 className="text-white text-4xl">Cafe Beans and Dreams</h1>
          <ul className="flex space-x-4 text-white">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/About" className="hover:text-gray-300">About</Link></li>
            <li><Link href="/Menu" className="hover:text-gray-300">Menu</Link></li>
            <li><Link href="/reviews" className="hover:text-gray-300">Reviews</Link></li>
            <li><Link href="/order" className="hover:text-gray-300">Order</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            <li><Link href="/Not-found" className="hover:text-gray-300">Gallery</Link></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
