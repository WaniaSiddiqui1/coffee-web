// import Link from 'next/link';

// const WelcomeSection = () => {
//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-centeroverflow-hidden">
  

//       <h1 className="text-6xl font-bold text-center text-yellow-950 relative z-10 shadow-lg">
//         Welcome to Beans and Dreams
//       </h1>
//       <p className="mt-4 text-center text-2xl font-bold text-yellow-950 relative z-10">
//         The perfect coffee stop!
//       </p>

//    <div
//   className="relative z-10 bg-cover bg-center h-screen w-screen"
//   style={{
//     backgroundImage: "url('/coffe.png')", // Replace with your image URL
//   }}
// >
//   {/* Full-page overlay */}
//   <div className="flex justify-center items-center h-full w-full bg-black bg-opacity-30">
//     <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
//       Welcome to Beans and Dreams
//     </h2>
//   </div>
// </div>



//       <div className="mt-8 flex justify-center space-x-4 relative z-10">
//         <li>
//           <Link
//             href="/About"
//             className="bg-yellow-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-950 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
//           >
//             Learn More
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/Menu"
//             className="bg-yellow-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-950 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
//           >
//             View Menu
//           </Link>
//         </li>
//       </div>

//       {/* Footer */}
//       <footer className="bg-brown-800 py-6 mt-auto w-full">
//         <div className="bg-yellow-950 w-full py-8">
//           <div className="container mx-auto text-center">
//             <p className="text-[#130905] text-sm">
//               © {new Date().getFullYear()} Beans and Dreams. All rights reserved.
//             </p>
//             <p className="text-[#130905] text-sm mt-2">
//               Designed with ☕ and dreams.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default WelcomeSection;


import Link from "next/link";

const WelcomeSection = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/coffe.png')", // Replace with your image URL
      }}
    >
      {/* Overlay to reduce background brightness */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold shadow-lg mb-4">
          Welcome to Beans and Dreams
        </h1>
        <p className="text-2xl font-semibold mb-6">
          The perfect coffee stop!
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/About"
            className="bg-yellow-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-950 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            Learn More
          </Link>
          <Link
            href="/Menu"
            className="bg-yellow-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-950 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            View Menu
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full">
        <div className="bg-yellow-950 py-6">
          <div className="container mx-auto text-center">
            <p className="text-[#130905] text-sm">
              © {new Date().getFullYear()} Beans and Dreams. All rights
              reserved.
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


  
