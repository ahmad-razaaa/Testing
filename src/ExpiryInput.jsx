import { useState } from "react";

export default function ExpiryInput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // only digits
    if (input.length > 4) input = input.slice(0, 4);
    if (input.length > 2) input = input.slice(0, 2) + input.slice(2); // keep slash logic separate
    setValue(input);
  };

  const displayValue =
    value.length > 2
      ? value.slice(0, 2) + "/" + value.slice(2)
      : value;

  return (
    <div className="relative inline-block w-full">
      {/* slash visually fixed */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-lg font-semibold">
        /
      </span>

      <input
        type="text"
        value={displayValue}
        onChange={handleChange}
        placeholder="MM/YY"
        maxLength={5}
        className="w-full border-2 border-gray-300 rounded-xl p-4 text-center tracking-[0.3em] text-xl font-semibold focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-200 hover:border-gray-400 bg-gray-50"
      />
    </div>
  );
}
