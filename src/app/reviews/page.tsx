const Review = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 <div bg-gradient-to-br from-yellow-100 to-yellow-50 overflow-hidden"> 
        <h1 className="text-4xl font-bold text-[#6f4e37] mb-8">Customer Reviews</h1>
        <p className="text-lg text-[#4b3832] mb-6">Here are some reviews from our happy customers!</p>
  
        {/* Reviews Section */}
        <div className="space-y-6 max-w-3xl">
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-[#4b3832]">"Best coffee in town! The ambiance is perfect for relaxing and unwinding."</p>
            <p className="mt-4 text-right text-[#7b6b58]">- Sara Jameel.</p>
          </div>
  
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-[#4b3832]">"The pastries are to die for, and the staff is incredibly friendly. Will definitely be back!"</p>
            <p className="mt-4 text-right text-[#7b6b58]">- Malika.</p>
          </div>
  
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-[#4b3832]">"I love the iced coffee here, it's the perfect treat on a hot day."</p>
            <p className="mt-4 text-right text-[#7b6b58]">- Amna Naseer.</p>
          </div>
  
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-[#4b3832]">"Such a cozy place! I always come here to work or read. Highly recommended!"</p>
            <p className="mt-4 text-right text-[#7b6b58]">- Miral Hameed.</p>
          </div>
  
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-[#4b3832]">"The latte art is beautiful, and the flavors are incredible. A must-visit spot for coffee lovers."</p>
            <p className="mt-4 text-right text-[#7b6b58]">- Emran K.</p>
          </div>
        </div>
  
      
      </div>
    );
  };
  
  export default Review;
  