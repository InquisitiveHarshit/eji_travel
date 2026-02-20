import { useState } from "react";
import GlossyButton from '../ui/GlossyButton';

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

function GetInTouchForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{7,15}$/.test(form.phone)) newErrors.phone = "Enter a valid phone number";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
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
      message: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  const inputBase = "w-full border-[1.5px] border-[#e0e0e0] rounded-[8px] px-3 sm:px-[14px] py-3 sm:py-[13px] text-sm sm:text-[0.92rem] text-[#1a1a1a] bg-white outline-none transition-colors duration-200 focus:border-[#FF8C00] placeholder:text-[#aaa] min-h-[44px]";
  const inputError = "border-[#e53935]";
  const errorMsg = "text-[#e53935] text-[0.75rem] mt-1";

  if (submitted) {
    return (
      <div className="w-full  flex items-center justify-center p-4 sm:p-8 font-['DM_Sans',-apple-system,BlinkMacSystemFont,sans-serif]">
        <div className="bg-white rounded-xl sm:rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.10)] p-5 sm:p-7 w-full max-w-[460px]">
          <div className="text-center py-6 sm:py-8">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎉</div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 px-2">
              Message Sent!
            </h2>
            <p className="text-sm sm:text-base text-[#666] mb-4 sm:mb-6 px-2">
              Thanks <strong>{form.fullName}</strong>! Our experts will get in touch with you shortly.
            </p>
            <GlossyButton onClick={handleReset} className="w-full min-h-[44px] px-6 py-3">
              Send Another Message
            </GlossyButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full  flex items-center justify-center p-4 sm:p-8 font-['DM_Sans',-apple-system,BlinkMacSystemFont,sans-serif]">
      <div className="bg-white rounded-xl sm:rounded-[16px] shadow-[0_4px_24px_rgba(255,140,0,0.18)] border border-[rgba(255,140,0,0.6)] p-5 sm:p-7 w-full max-w-[460px]">
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
                />
                {errors.phone && <p className={errorMsg}>{errors.phone}</p>}
              </div>
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
            />
          </div>

          {/* Submit */}
          <GlossyButton type="submit" className="w-full py-3 sm:py-4 bg-gradient-to-b from-[#FFB347] via-[#FF8C00] to-[#FF6B00] text-white font-bold text-base tracking-wide shadow-[0_4px_18px_rgba(255,120,0,0.35)] transition-all duration-200 hover:brightness-108 hover:shadow-[0_8px_28px_rgba(255,120,0,0.45)] hover:-translate-y-[1px] active:scale-[0.98] mt-1 min-h-[44px]">
            Get In Touch
          </GlossyButton>
        </form>
      </div>
    </div>
  );
}

export default GetInTouchForm;
