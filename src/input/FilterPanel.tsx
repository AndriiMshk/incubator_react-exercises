import React from 'react';

interface FilterPanelPropsType {
  filterByCheck: any
  filterByRating: any
}

export const FilterPanel: React.FC<FilterPanelPropsType> = ({
  filterByCheck, filterByRating
}) => {
  return (
    <div>
      <button onClick={() => filterByCheck('All')}>All</button>
      <button onClick={() => filterByCheck('Checked')}>Checked</button>
      <button onClick={() => filterByCheck('Unchecked')}>Unchecked</button>
      <select
        onChange={(event) => filterByRating(+event.target.value)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
  )
}