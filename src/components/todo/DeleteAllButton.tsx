import React from 'react';

interface DeleteAllButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const DeleteAllButton: React.FC<DeleteAllButtonProps> = ({ onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'} text-white transition-colors`}
    >
      Delete All
    </button>
  );
};

export default DeleteAllButton;