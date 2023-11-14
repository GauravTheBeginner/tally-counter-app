import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  removeCounter,
  editCounterName,
} from '../features/counterSlice';

const CounterItem = ({ counter }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(counter.name);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(editCounterName({ id: counter.id, name: editedName }));
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedName(counter.name);
    setEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <div>
          {counter.name}: {counter.value}
          <button onClick={() => dispatch(increment(counter.id))}>+</button>
          <button onClick={() => dispatch(decrement(counter.id))}>-</button>
          <button onClick={() => dispatch(reset(counter.id))}>Reset</button>
          <button onClick={() => dispatch(removeCounter(counter.id))}>Remove</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </li>
  );
};

export default CounterItem;
