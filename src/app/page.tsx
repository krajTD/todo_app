'use client';

import React, { useState, useEffect } from 'react';
import InputField from '@/components/todo/InputField';
import AddButton from '@/components/todo/AddButton';
import TodoList from '@/components/todo/TodoList';
import DeleteAllButton from '@/components/todo/DeleteAllButton';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: inputValue.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDeleteAll = () => {
    if (confirm('Are you sure you want to delete all tasks?')) {
      setTodos([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">TODO App</h1>
        
        <div className="flex space-x-2 mb-6">
          <div className="flex-grow">
            <InputField
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What needs to be done?"
            />
          </div>
          <AddButton
            onClick={handleAddTodo}
            disabled={!inputValue.trim()}
          >
            Add
          </AddButton>
        </div>

        {todos.length > 0 && (
          <div className="flex justify-end mb-4">
            <DeleteAllButton
              onClick={handleDeleteAll}
              disabled={todos.length === 0}
            />
          </div>
        )}
        
        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        ) : (
          <p className="text-gray-500 text-center py-4">No tasks yet. Add one above!</p>
        )}
      </div>
    </div>
  );
};

export default TodoApp;