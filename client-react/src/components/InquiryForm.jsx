function InquiryForm({ variant = "sidebar" }) {
  const isSidebar = variant === "sidebar";

  return (
    <div className={`${isSidebar ? 'bg-primary p-9 rounded-xl text-white shadow-lg' : 'bg-primary p-10 rounded-xl text-white shadow-lg'}`}>
      <h3 className="text-2xl font-bold mb-4">Get a Quote</h3>
      <p className={`mb-5 opacity-80 ${isSidebar ? 'text-sm' : 'text-base'}`}>
        Expert planning & callback in 30 mins.
      </p>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full py-3.5 px-4 rounded-lg border-none text-base mb-4 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full py-3.5 px-4 rounded-lg border-none text-base mb-4 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="tel"
          placeholder="WhatsApp Number"
          required
          className="w-full py-3.5 px-4 rounded-lg border-none text-base mb-4 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          type="submit"
          className="bg-accent text-white border-none py-4 w-full rounded-lg font-bold cursor-pointer transition-smooth hover:bg-[#a53d21] hover:-translate-y-0.5"
        >
          RESERVE MY SPOT
        </button>
      </form>
      <p className={`text-center opacity-60 mt-4 ${isSidebar ? 'text-xs' : 'text-xs'}`}>
        <i className="fas fa-clock"></i> Limited Availability for 2026
      </p>
    </div>
  );
}

export default InquiryForm;
