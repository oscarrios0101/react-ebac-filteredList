import React, { useState } from 'react';
import SearchBox from './SearchBox';

//Props with Default Values "items = [], title = 'Filtered List'"
const FilteredList = ({ items = [], title = 'Filtered List' }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <SearchBox setSearchTerm={setSearchTerm} />
      <ul className="space-y-2">
        {filteredItems.map((item, index) => (
          <li
            key={index}
            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
