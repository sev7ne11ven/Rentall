import React from 'react';

const Filter = ({ filterText, setFilterText }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search for an item..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  );
};

export default Filter;
