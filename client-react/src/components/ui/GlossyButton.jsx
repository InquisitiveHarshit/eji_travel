function GlossyButton({ children, onClick, type = "button", className = "", ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-glossy ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default GlossyButton;
