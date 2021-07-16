import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = (props) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const { filterChange } = props;
  return (
    <select onChange={(e) => filterChange(e.target.value)}>
      {categories.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
      ;
    </select>
  );
};

CategoryFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
