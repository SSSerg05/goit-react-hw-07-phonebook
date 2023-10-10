import styled from "@emotion/styled";


export const Btn = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  
  font: inherit;
  text-transform: capitalize;

  cursor: pointer;
  background-color: #e2e5e8;
  color: black;

  &:hover, &:active {
    cursor: pointer;
    background-color: #1976d2;
    color: #fff;
  }

  &:active {
    background-color: tomato;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);;
  }
`
export const FilterBox = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 12px;
`