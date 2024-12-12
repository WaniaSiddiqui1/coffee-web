import Link from 'next/link';
const Footer = () => {
    return (
      <footer className="bg-brown-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Beans and Dreams. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed with ☕ and dreams.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;