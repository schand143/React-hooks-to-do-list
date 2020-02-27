import React from 'react';

export default ({ message, id, deleteNote }) => (
  <div className='Note'>
    <p>
      {message} | Id: {id}
    </p>
    <div>
      {' '}
      <button onClick={() => deleteNote(id)}> Delete this notes </button>{' '}
    </div>
  </div>
);
