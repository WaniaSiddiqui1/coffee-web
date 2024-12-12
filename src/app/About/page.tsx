
const About = () => {
    return (
      
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-50 overflow-hidden">
        <section className="py-16 px-8 text-center">
          <h2 className="text-5xl font-bold text-yellow-950">About Us</h2>
          <p className="mt-6 text-lg text-[#4b3832] max-w-2xl mx-auto">
            At Cafe Beans and Dreams, we believe that coffee is more than just a drink. It’s an experience, a moment of relaxation, and an escape from the rush of everyday life. Whether you're catching up with friends or enjoying a quiet moment alone, we want to make every cup special.
          </p>
          <p className="mt-4 text-lg text-[#4b3832] max-w-2xl mx-auto">
            Our journey started with a passion for coffee and a dream to create a place where people can unwind. The road wasn't easy—we faced challenges from sourcing the best beans to perfecting our brews. But with dedication and love for the craft, we've created a space that feels like home, where every sip tells our story of perseverance and passion.
          </p>
          <p className="mt-4 text-lg text-[#4b3832] max-w-2xl mx-auto">
            Join us in our journey, and taste the dreams we've poured into every cup. From the rich aroma to the comforting warmth, you'll find that every visit to Cafe Beans and Dreams is more than just coffee—it's a connection.
          </p>
          
          <a
            href="/reviews"
            className="mt-8 inline-block bg-yellow-900 hover:bg-yellow-950 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
          >
            Read Our Reviews
          </a>
        </section>
        </div>
      
    );
  };
  
  export default About;
  