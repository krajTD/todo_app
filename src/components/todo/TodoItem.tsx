import React from 'react';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-3 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span className={`${completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;