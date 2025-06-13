import { useState, useEffect } from "react";
import { useRef } from "react";

const Dropdown = ({ name, list, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectValue = (value) => {
    if (onSelect) onSelect(value);
    toggleDropdown();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {name}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
          <ul className="py-1 text-sm text-gray-700">
            {list.map((value, i) => (
              <li
                key={i}
                className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                onClick={() => handleSelectValue(value)}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
