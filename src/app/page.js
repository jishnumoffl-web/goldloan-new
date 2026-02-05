export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9C846] flex flex-col items-center justify-between relative overflow-hidden px-4">

      {/* Top Bar */}
      <div className="w-full max-w-7xl flex justify-between items-center pt-6">
        <span className="flex items-center gap-2 text-sm font-medium text-black">
          ✨ Since 1989
        </span>

        <a
          href="tel:8714742635"
          className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full shadow-md font-semibold text-sm hover:scale-105 transition"
        >
          📞 Call Now
        </a>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20">

        {/* Logo */}
        <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-gray-200">
          <div className="text-3xl font-extrabold">
            <img
              src="/images/logo.png"
              className="img-fluid rounded-top"
              alt="logo"
            />
            
          </div>
        </div>

        <p className="text-xs tracking-widest mt-2 text-gray-600">
          SHERLYN GROUP · ESTD 1989
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-black mt-8 tracking-wide">
          THANDAPRA
        </h1>

        <p className="text-lg md:text-xl tracking-widest mt-2 text-black/80">
          GOLD LOAN & FINANCE
        </p>

        {/* Coming Soon Badge */}
        <div className="mt-8 bg-white px-6 py-3 rounded-full shadow flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="font-semibold text-black">Coming Soon</span>
        </div>

        {/* Description */}
        <p className="max-w-2xl mt-10 text-gray-800 text-sm md:text-base leading-relaxed">
          We are preparing something extraordinary for you.  
          Our trusted gold loan and finance services are getting a digital makeover to serve you better.
        </p>

        {/* Email Input */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg">
          <input
            type="email"
            placeholder="Enter your email for updates"
            className="w-full px-6 py-4 rounded-full text-black placeholder:text-black outline-none shadow-md"
          />
          <button className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition">
            Notify Me →
          </button>
        </div>
      </section>

      {/* Contact Card */}
      <section className="w-full max-w-5xl bg-[#FFF4D6] rounded-3xl shadow-xl px-8 py-10 mt-20">
        <h2 className="text-center text-2xl font-bold mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 bg-[#F9C846] rounded-full flex items-center justify-center mx-auto mb-3">
              📞
            </div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="font-bold  text-black">8714 742 635</p>
          </div>

          <div>
            <div className="w-12 h-12 bg-[#F9C846] rounded-full flex items-center justify-center mx-auto mb-3">
              ✉️
            </div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-bold text-black">info@thandapra.com</p>
          </div>

          <div>
            <div className="w-12 h-12 bg-[#F9C846] rounded-full flex items-center justify-center mx-auto mb-3">
              ⏰
            </div>
            <p className="text-sm text-gray-600">Working Hours</p>
            <p className="font-bold  text-black">Mon – Sat: 9AM – 6PM</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-700 py-10">
        <p>Sherlyn Group — Trusted Financial Partner Since 1989</p>
        <p className="text-xs mt-2">
          © 2026 Thandapra Gold Loan & Finance. All rights reserved.
        </p>
      </footer>

      {/* Decorative Dots */}
      <div className="absolute top-40 left-20 w-3 h-3 bg-white/40 rounded-full"></div>
      <div className="absolute top-64 right-24 w-4 h-4 bg-white/30 rounded-full"></div>
      <div className="absolute bottom-40 left-32 w-3 h-3 bg-white/30 rounded-full"></div>

    </main>
  );
}
