import styled from "@emotion/styled";

export const FieldBox = styled.div`
  position: relative;
  margin-bottom: 8px;
`

export const FieldLabel = styled.label`
  display: block;
  padding: 0 4px;
`

export const FieldInput = styled.input`
    display: block;

   // width: 100%;
    min-width: 380px; // 380-30-30
    outline: 1px solid rgba(33, 33, 33, 0.2);
    background-color: transparent;
    border-radius: 4px;
    border: none;

    padding: 8px;

    &:hover,
    &:focus-within {
      outline: 1px solid blue;
      background-color: rgb(232, 240, 254);
      transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`

export const FieldPosition = styled.span`
  position: relative;
  margin-top: 4px;
`

export const Button = styled.button`
  display: inline-block;
  width: 100px;
  padding: 20px;
  margin: 10px;
  border: none;
  outline: 1px solid black;
  border-radius: 10px;
  transition: background-color 150ms ease-in, 
              color 150ms ease-in,
              font-weight 150ms ease-in;

  &:hover, &:active {
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 0.03rem;  
    background-color: #1976d2;
    color: #fff;
    border: 1px solit black;
  }

  &:active {
    background-color: tomato;
    transition: background-color 150ms ease-in,
                color 150ms ease-in;
  }
`