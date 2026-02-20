import { useState } from "react";
import GlossyButton from '../ui/GlossyButton';
import data from '../../data/data.json';

const countryCodes = [
  { code: "+91", country: "IN" },
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "AU" },
  { code: "+971", country: "UAE" },
  { code: "+65", country: "SG" },
  { code: "+81", country: "JP" },
  { code: "+49", country: "DE" },
];

function InquiryForm({ variant = "sidebar", id }) {
  const isSidebar = variant === "sidebar";

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    travelDate: "",
    travellerCount: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    if (name === "fullName") {
      if (!value.trim()) return "Full name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      if (!/^[a-zA-Z\s]+$/.test(value.trim())) return "Name should not contain numbers or special characters";
    }
    if (name === "email") {
      if (!value.trim()) return "Email is required";
      if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email";
    }
    if (name === "phone") {
      if (!value.trim()) return "Phone number is required";
      if (!/^\d{7,15}$/.test(value)) return "Enter a valid phone number (7-15 digits)";
    }
    if (name === "travelDate") {
      if (!value) return "Travel date is required";
      if (new Date(value) < new Date().setHours(0, 0, 0, 0)) return "Travel date cannot be in the past";
    }
    if (name === "travellerCount") {
      if (!value) return "Traveller count is required";
      if (parseInt(value) < 1) return "At least 1 traveller required";
      if (parseInt(value) > 50) return "Maximum 50 travellers allowed";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For fullName, filter out numbers and special characters as user types
    if (name === "fullName") {
      const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
      setForm((prev) => ({ ...prev, [name]: filteredValue }));
      const error = validateField(name, filteredValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
      return;
    }
    
    // For phone, only allow digits
    if (name === "phone") {
      const filteredValue = value.replace(/\D/g, "");
      setForm((prev) => ({ ...prev, [name]: filteredValue }));
      const error = validateField(name, filteredValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
      return;
    }
    
    // For other fields, update normally
    setForm((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    Object.keys(form).forEach(key => {
      const error = validateField(key, form[key]);
      if (error) validationErrors[key] = error;
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    console.log("Form submitted:", form);
  };

  const handleReset = () => {
    setForm({
      fullName: "",
      email: "",
      countryCode: "+91",
      phone: "",
      travelDate: "",
      travellerCount: "",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  const inputBase = "w-full border-[1.5px] border-[#e0e0e0] rounded-[8px] px-3 sm:px-[14px] py-3 sm:py-[13px] text-sm sm:text-[0.92rem] text-[#1a1a1a] bg-white outline-none transition-colors duration-200 focus:border-[#FF8C00] placeholder:text-[#aaa] min-h-[44px]";
  const inputError = "border-[#e53935]";
  const errorMsg = "text-[#e53935] text-[0.75rem] mt-1";
  const label = "text-[#999] text-[0.82rem] mb-1";

  const { oldPrice, newPrice, discount } = data.tour.pricing;
  const savings = oldPrice - newPrice;

  const formatPrice = (price) => {
    return `INR ${price.toLocaleString('en-IN')}`;
  };

  if (submitted) {
    return (
      <div className="w-full  flex items-center justify-center p-4 sm:p-8 font-['DM_Sans',-apple-system,BlinkMacSystemFont,sans-serif]">
        <div className="bg-white rounded-xl sm:rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.10)] p-5 sm:p-7 w-full max-w-[460px]">
          <div className="text-center py-6 sm:py-8">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎉</div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 px-2">
              Enquiry Sent!
            </h2>
            <p className="text-sm sm:text-base text-[#666] mb-4 sm:mb-6 px-2">
              Thanks <strong>{form.fullName}</strong>! We'll get back to you shortly.
            </p>
            <GlossyButton onClick={handleReset} className="w-full min-h-[44px] px-6 py-3">
              Send Another Enquiry
            </GlossyButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full  flex items-center justify-center p-4 sm:p-8 font-['DM_Sans',-apple-system,BlinkMacSystemFont,sans-serif]">
      <div className="bg-white rounded-xl sm:rounded-[16px] shadow-[0_4px_24px_rgba(255,140,0,0.18)] border border-[rgba(255,140,0,0.6)] p-5 sm:p-7 w-full max-w-[460px]">
        {/* Header */}
        <p className="text-sm sm:text-base font-bold text-[#1a1a1a] mb-2">
          Japan Delights | Group Tour Package
        </p>
        <div className="flex items-center gap-2 sm:gap-2.5 mb-4 sm:mb-5 flex-wrap">
          <span className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">{formatPrice(newPrice)}</span>
          <span className="text-xs sm:text-sm text-[#999] line-through">{formatPrice(oldPrice)}</span>
          <span className="bg-[#e6f4ea] text-[#2e7d32] text-[0.72rem] font-bold px-2 sm:px-[9px] py-0.5 sm:py-[3px] rounded-[4px] tracking-wide whitespace-nowrap">
            SAVE {formatPrice(savings)}
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:gap-3.5">
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={form.fullName}
              onChange={handleChange}
              className={`${inputBase} ${errors.fullName ? inputError : ""}`}
              onBlur={(e) => {
                e.target.style.borderColor = errors.fullName ? "#e53935" : "#e0e0e0";
              }}
            />
            {errors.fullName && <p className={errorMsg}>{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              className={`${inputBase} ${errors.email ? inputError : ""}`}
              onBlur={(e) => {
                e.target.style.borderColor = errors.email ? "#e53935" : "#e0e0e0";
              }}
            />
            {errors.email && <p className={errorMsg}>{errors.email}</p>}
          </div>

          {/* Phone Row */}
          <div>
            <div className="flex gap-2 sm:gap-2.5 flex-col sm:flex-row">
              {/* Country Code */}
              <div className="relative w-full sm:w-[115px] flex-shrink-0">
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className={`${inputBase} pr-7 cursor-pointer appearance-none`}
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} {c.country}
                    </option>
                  ))}
                </select>
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#666] text-[0.75rem]">
                  ▾
                </span>
              </div>

              {/* Phone Number */}
              <div className="flex-1">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone*"
                  value={form.phone}
                  onChange={handleChange}
                  className={`${inputBase} ${errors.phone ? inputError : ""}`}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.phone ? "#e53935" : "#e0e0e0";
                  }}
                />
                {errors.phone && <p className={errorMsg}>{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Travel Date + Traveller Count */}
          <div className="flex gap-3 flex-col sm:flex-row">
            <div className="flex-1">
              <input
                type="date"
                name="travelDate"
                value={form.travelDate}
                onChange={handleChange}
                className={`${inputBase} ${errors.travelDate ? inputError : ""} ${!form.travelDate ? 'text-[#aaa]' : 'text-[#1a1a1a]'}`}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.travelDate ? "#e53935" : "#e0e0e0";
                }}
              />
              {errors.travelDate && <p className={errorMsg}>{errors.travelDate}</p>}
            </div>
            <div className="flex-1">
              <input
                type="number"
                name="travellerCount"
                placeholder="Traveller Count*"
                min="1"
                max="50"
                value={form.travellerCount}
                onChange={handleChange}
                className={`${inputBase} ${errors.travellerCount ? inputError : ""}`}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.travellerCount ? "#e53935" : "#e0e0e0";
                }}
              />
              {errors.travellerCount && <p className={errorMsg}>{errors.travellerCount}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Message..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              className={`${inputBase} resize-y min-h-[100px]`}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0";
              }}
            />
          </div>

          {/* Submit */}
          <GlossyButton type="submit" className="w-full py-3 sm:py-4 bg-gradient-to-b from-[#FFB347] via-[#FF8C00] to-[#FF6B00] text-white font-bold text-base tracking-wide shadow-[0_4px_18px_rgba(255,120,0,0.35)] transition-all duration-200 hover:brightness-108 hover:shadow-[0_8px_28px_rgba(255,120,0,0.45)] hover:-translate-y-[1px] active:scale-[0.98] mt-1 min-h-[44px]">
            Send Enquiry
          </GlossyButton>
        </form>
      </div>
    </div>
  );
}

export default InquiryForm;
