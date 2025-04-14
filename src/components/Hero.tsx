import heroCake from '../public/images/heroCake1.jpg';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FBF5E5]">
      <div className="py-16 flex justify-between items-center">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-4 text-yellow-950">
            Welcome to
            <br />
            <span className="text-[#A35C7A]">Baking Bliss</span>
          </h1>
          <p className="text-gray-600 mb-8 text-justify">
            A cycling-themed coffee house in Kandy, serving specialty coffees, homemade brownies, and custom cakes. Experience the perfect blend of coffee culture and cycling passion.
          </p>
          <div className="space-x-4">
            <a
              href="/menu"
              className="px-6 py-3 border-yellow-950 bg-yellow-950 text-white rounded-full hover:bg-yellow-100 hover:text-yellow-950 transition-colors"
            >
              View Menu
            </a>
            <a
              href="/birthday-gallery"
              className="px-6 py-3 border border-yellow-950 text-yellow-950 rounded-full hover:bg-yellow-100 transition-colors"
            >
              Custom Cakes
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-80 h-80 bg-emerald-100 rounded-full overflow-hidden">
            <img
              src={heroCake}
              alt="Cafe KOI specialty coffee"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;