const Contact = () => {
    return (
      <>
        
        <section className="py-16 bg-yellow-100 text-center">
          <h2 className="text-6xl font-bold text-yellow-950 text-purple">Contact Us</h2>
          <div >
  <form className="w-full  flex flex-col items-center">
    <input
      className="border p-3 mb-4 w-3/4 bg-yellow-800 rounded-lg"
      type="text"
      placeholder="Your Name"
    />
    <input
      className="border p-2 mb-4 w-3/4 bg-yellow-800 rounded-lg"
      type="email"
      placeholder="Your Email"
    />
    <textarea
      className="border p-2 mb-4 w-3/4 bg-yellow-800 rounded-lg"
      placeholder="Your Message"
    ></textarea>
    <button className="bg-yellow-100 hover:bg-yellow-800 text-yellow-950 p-3 rounded-lg w-3/4 transition-all">
      Send Message
    </button>
  </form>
</div>

  
        
        </section>
        
      </>
    );
  };
  
  export default Contact;
  
  
  
  