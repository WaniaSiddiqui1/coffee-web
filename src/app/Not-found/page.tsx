import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-beige bg-gradient-to-br from-yellow-100 to-yellow-50 text-brown-700">
      <h1 className="text-6xl font-bold text-brown-800"></h1>
      <h2 className="text-6xl mt-4 text-bold text-yellow-950">Oops!</h2>
      <p className="mt-2 text-bold text-yellow-950">
        We couldn't find what you're looking for, but don't worry! Maybe it's time for a coffee break?
      </p>

      <div className="mt-6 flex justify-center">
  <Link
    href="/"
    className="bg-yellow-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-brown-700 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    Back to the Café
  </Link>
</div>


    
    </section>
  );
};

export default NotFound;
