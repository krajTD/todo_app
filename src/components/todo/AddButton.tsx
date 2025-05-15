import React from 'react';

interface AddButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
    >
      {children}
    </button>
  );
};

export default AddButton;