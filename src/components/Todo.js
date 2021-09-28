import React, { useState } from 'react';

const initialState = ['maca', 'agua', 'pao', 'pizza'];

export const Todo = () => {
  const [list, setList] = useState(initialState);

  const renderList = list.map((item) => <li>{item}</li>);

  return (
    <div>
      <ul>{renderList}</ul>
      <form>
        <label />
        <input type="text"></input>

        <button>submit</button>
      </form>
    </div>
  );
};
