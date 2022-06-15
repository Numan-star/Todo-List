import React from 'react';

export default function TodoItem({ todo, onDelete }) {
    return <div className='my-4'>
        <h3>
            {todo.title}
        </h3>
        <p>
            {todo.description}
        </p>
        <button className="btn-sm btn-danger btn" onClick={() => { onDelete(todo) }}>Delete</button>
    </div>;
}
