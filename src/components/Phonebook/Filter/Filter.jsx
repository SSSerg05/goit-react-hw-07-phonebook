/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux"; 


import { statusFilters } from "redux/constants"; 
import { selectStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filtersSlice";

import { Btn, FilterBox } from "./Filter.styled";


export const Filter = () => { 
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  // const handleSearchChange = query => dispatch(searchContact(query))


  const isSelectedStyle = css({
    backgroundColor: '#1976d2',
    color: '#fff',
  });

  const btn = Object.keys(statusFilters)
  return (
    <FilterBox>
      {
        btn.map((item, index) => {
          const isSelected = (filter === statusFilters[item]);
          
          return (<Btn 
              css={ isSelected && isSelectedStyle }
              key={`${index}-${item}`}
              selected={isSelected}
              onClick={() => handleFilterChange(statusFilters[item])}
            >
              {item}
            </Btn>
          )}
        )
      }
    </FilterBox>
  );
  
}

