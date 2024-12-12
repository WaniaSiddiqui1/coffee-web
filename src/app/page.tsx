import Link from 'next/link';

const WelcomeSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-centeroverflow-hidden">
  

      <h1 className="text-6xl font-bold text-center text-yellow-950 relative z-10 shadow-lg">
        Welcome to Beans and Dreams
      </h1>
      <p className="mt-4 text-center text-2xl font-bold text-yellow-950 relative z-10">
        The perfect coffee stop!
      </p>
      
      {/* Additional Paragraphs */}
      <div className="mt-8 max-w-3xl text-center text-yellow-950 relative z-10 px-4">
        <p className="mb-4 text-lg">
        "At Beans and Dreams, we believe that every cup of coffee tells a story. Our passion for coffee and artisanal pastries drives us to source the finest beans from around the world. Each sip is crafted to perfection, ensuring an unforgettable experience with every visit."
        </p>
        <p className="mb-4 text-lg">
          "Our café is not just about great coffee; it's about creating a space where you can relax, unwind, and connect. Whether you're catching up with friends, working on a project, or simply enjoying a quiet moment, we offer a warm and inviting atmosphere that feels like home."
        </p>
        <p className="mb-4 text-lg">
          "Join our community of coffee lovers and let us be your go-to destination for delightful flavors and memorable moments. We look forward to welcoming you to Beans and Dreams, where every visit is a journey of taste and discovery."
        </p>
      </div>

      <div className="mt-8 flex justify-center space-x-4 relative z-10">
        <li>
          <Link
            href="/About"
            className="bg-yellow-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-950 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            Learn More
          </Link>
        </li>

        <li>
          <Link
            href="/Menu"
            className="bg-yellow-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-950 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            View Menu
          </Link>
        </li>
      </div>

      {/* Footer */}
      <footer className="bg-brown-800 py-6 mt-auto w-full">
        <div className="bg-yellow-950 w-full py-8">
          <div className="container mx-auto text-center">
            <p className="text-[#130905] text-sm">
              © {new Date().getFullYear()} Beans and Dreams. All rights reserved.
            </p>
            <p className="text-[#130905] text-sm mt-2">
              Designed with ☕ and dreams.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomeSection;




  
