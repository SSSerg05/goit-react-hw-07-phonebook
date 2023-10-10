import styled from "@emotion/styled";

export const List = styled.ul`
  text-decoration: none;
  margin: 0;
  padding-left: 0;
  list-style: none;
`
export const ListItem = styled.li`
  background-color: lightsteelblue;

  &:nth-of-type(odd) {
    background-color: lightcyan;
  }
`

export const ItemButton = styled.button`
  display: inline-block;
  outline: 1px solid black;
  border: none;
  min-width: 75px;
  height: 24px;
  margin: 0;
  padding: 0;
  margin-right: 10px;
  border-radius: 5px;

  &:hover, &:active {
    cursor: pointer;
    background-color: cyan;
    border: 1px solit black;
  }

  &:active {
    background-color: tomato;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);;
  }
`
