
import Link from "next/link";
const Menu = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-br from-yellow-100 to-yellow-50 overflow-hidden">
      <h2 className="text-5xl font-bold text-yellow-950 mb-8">Our Menu</h2>
      <p className="mt-4 text-[#4b3832] text-lg">Explore our delicious offerings below!</p>

      {/* Menu Categories */}
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Coffee Category */}
        <div className="bg-yellow-50 p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-[#6f4e37] mb-4">Coffee</h3>
          <ul>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Espresso</span>
              <span className="text-lg text-[#7b6b58]">₨ 350</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Cappuccino</span>
              <span className="text-lg text-[#7b6b58]">₨ 600</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Latte</span>
              <span className="text-lg text-[#7b6b58]">₨ 800</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Americano</span>
              <span className="text-lg text-[#7b6b58]">₨ 550</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Mocha</span>
              <span className="text-lg text-[#7b6b58]">₨ 650</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Macchiato</span>
              <span className="text-lg text-[#7b6b58]">₨ 750</span>
            </li>
          </ul>
        </div>

        {/* Pastries Category */}
        <div className="bg-yellow-50 p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-[#6f4e37] mb-4">Pastries</h3>
          <ul>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Croissant</span>
              <span className="text-lg text-[#7b6b58]">₨ 700</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Chocolate Muffin</span>
              <span className="text-lg text-[#7b6b58]">₨ 750</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Blueberry Scone</span>
              <span className="text-lg text-[#7b6b58]">₨ 980</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Cinnamon Roll</span>
              <span className="text-lg text-[#7b6b58]">₨ 850</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Apple Danish</span>
              <span className="text-lg text-[#7b6b58]">₨ 900</span>
            </li>
          </ul>
        </div>

        {/* Cold Drinks Category */}
        <div className="bg-yellow-50 p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-[#6f4e37] mb-4">Cold Drinks</h3>
          <ul>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Iced Coffee</span>
              <span className="text-lg text-[#7b6b58]">₨ 800</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Iced Tea</span>
              <span className="text-lg text-[#7b6b58]">₨ 600</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Smoothie</span>
              <span className="text-lg text-[#7b6b58]">₨ 950</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Frappuccino</span>
              <span className="text-lg text-[#7b6b58]">₨ 900</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Iced Mocha</span>
              <span className="text-lg text-[#7b6b58]">₨ 850</span>
            </li>
          </ul>
        </div>

        {/* Sandwiches Category */}
        <div className="bg-yellow-50 p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-[#6f4e37] mb-4">Sandwiches</h3>
          <ul>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Grilled Cheese</span>
              <span className="text-lg text-[#7b6b58]">₨ 900</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Chicken Panini</span>
              <span className="text-lg text-[#7b6b58]">₨ 1200</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Veggie Wrap</span>
              <span className="text-lg text-[#7b6b58]">₨ 850</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Club Sandwich</span>
              <span className="text-lg text-[#7b6b58]">₨ 950</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Tuna Melt</span>
              <span className="text-lg text-[#7b6b58]">₨ 1050</span>
            </li>
          </ul>
        </div>

        {/* Desserts Category */}
        <div className="bg-yellow-50 p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-[#6f4e37] mb-4">Desserts</h3>
          <ul>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Cheesecake</span>
              <span className="text-lg text-[#7b6b58]">₨ 1100</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Tiramisu</span>
              <span className="text-lg text-[#7b6b58]">₨ 1250</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Brownie</span>
              <span className="text-lg text-[#7b6b58]">₨ 700</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Apple Pie</span>
              <span className="text-lg text-[#7b6b58]">₨ 950</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Chocolate Cake</span>
              <span className="text-lg text-[#7b6b58]">₨ 1100</span>
            </li>
          </ul>
        </div>

        {/* New Category - Tea */}
        <div className="bg-yellow-50 p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-[#6f4e37] mb-4">Tea</h3>
          <ul>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Green Tea</span>
              <span className="text-lg text-[#7b6b58]">₨ 400</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Black Tea</span>
              <span className="text-lg text-[#7b6b58]">₨ 350</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Chai Latte</span>
              <span className="text-lg text-[#7b6b58]">₨ 600</span>
            </li>
            <li className="flex justify-between mb-2">
              <span className="text-lg font-medium text-[#4b3832]">Herbal Tea</span>
              <span className="text-lg text-[#7b6b58]">₨ 550</span>
            </li>
          </ul>
        </div>
      </div>

  
      <div className="mt-12">
       <li> <Link href="/order">
          <button className="px-6 py-3 bg-yellow-800 text-white font-bold text-lg rounded-lg shadow hover:bg-yellow-950 transition duration-300">
            Let’s Order
          </button>
        </Link></li>
      </div>
    </section>
  );
};

export default Menu;
