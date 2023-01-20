import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Icon,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeInput = evt => {
    const { value } = evt.target;

    setSearchValue(value.trim());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchValue.length === 0) {
      toast.error('You entered the wrong movie title');
      return;
    }

    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        value={searchValue}
        autocomplete="off"
        placeholder="Search movies"
        onChange={handleChangeInput}
      />

      <SearchFormButton type="submit">
        Search
        <Icon />
      </SearchFormButton>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
