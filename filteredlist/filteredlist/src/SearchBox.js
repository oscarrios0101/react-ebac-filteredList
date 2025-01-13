import React from 'react';

const SearchBox = ({ setSearchTerm }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search items..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBox;
