
"use client";
import { useState, useEffect } from "react";

const Orders = () => {
  const [menuItem, setMenuItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [isProcessing, setIsProcessing] = useState(false);
  const [loading, setLoading] = useState(true);

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const loadPage = async () => {
      alert("Please wait while we load the page...");
      await delay(5000); 
      setLoading(false); 
    };
    loadPage();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true); 
    alert("Hold on, just wait a second please!");

    await delay(5000); 

    console.log({ menuItem, quantity, location, paymentMethod });

    setIsProcessing(false); 
    alert("Order placed successfully!");
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-600 text-brown-700">
        <div className="text-center">
          {/* Loading Spinner */}
          <div className="flex justify-center mb-4">
            <svg
              className="animate-spin h-10 w-10 text-yellow-950"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0112.6-6.4 3.6 3.6 0 010 5.1A8 8 0 004 12z"
              />
            </svg>
          </div>
          <h2 className="text-4xl text-yellow-950">Hold on, Wait A second Please!...</h2>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-beige text-center">
      <h2 className="text-4xl font-bold text-yellow-950">Order Now</h2>
      <p className="mt-4 text-brown-600">Place your order for the best coffee and pastries!</p>

      <div className="container mx-auto mt-8 max-w-md bg-yellow-800 p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Menu Item Selection */}
          <div>
            <label className="block text-left font-medium text-brown-700 mb-2">Select Menu Item</label>
            <select
              className="w-full border border-brown-300 rounded px-4 py-2 bg-gradient-to-br from-yellow-100 to-yellow-600 text-brown-700"
              value={menuItem}
              onChange={(e) => setMenuItem(e.target.value)}
              required
            >
              <option value="">-- Choose an item --</option>
              <option value="Espresso">Espresso</option>
              <option value="Cappuccino">Cappuccino</option>
              <option value="Latte">Latte</option>
              <option value="Croissant">Croissant</option>
              <option value="Chocolate Muffin">Chocolate Muffin</option>
              <option value="Grilled Cheese">Grilled Cheese</option>
            </select>
          </div>

          {/* Quantity Selection */}
          <div>
            <label className="block text-left font-medium text-brown-700 mb-2">Select Quantity</label>
            <input
              type="number"
              className="w-full border border-brown-300 rounded px-4 py-2 text-brown-700 bg-gradient-to-br from-yellow-100 to-yellow-600 text-brown-700"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              required
            />
          </div>

          {/* Location Input */}
          <div>
            <label className="block text-left font-medium text-brown-700 mb-2">Delivery Location</label>
            <input
              type="text"
              className="w-full border border-brown-300 rounded px-4 py-2 text-brown-700 bg-yellow-100 bg-gradient-to-br from-yellow-100 to-yellow-600 text-brown-700"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-left font-medium text-brown-700 mb-2">Select Payment Method</label>
            <div className="flex space-x-4 justify-center">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                  className="mr-2"
                />
                Online Payment
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-brown-600 text-white font-semibold px-4 py-2 rounded w-full ${
              isProcessing ? "cursor-not-allowed" : "hover:bg-yellow-950"
            }`}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Place Order"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Orders;
