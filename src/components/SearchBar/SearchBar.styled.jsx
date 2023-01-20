import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const SearchForm = styled.form`
  margin-top: 16px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 28px;
  font-size: 20px;
  margin-left: 10px;
  border-radius: 5px;
  /* background-color: ${p => p.theme.colors.yellow}; */
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    background-color: ${p => p.theme.colors.yellow};
  }
`;

export const SearchFormInput = styled.input`
  display: inline-flex;
  align-items: center;
  font: inherit;
  font-size: 20px;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;
