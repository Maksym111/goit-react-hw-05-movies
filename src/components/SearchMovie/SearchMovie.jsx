import PropTypes from 'prop-types';

const SearchMovie = ({ formValue, value }) => {
  const submitForm = e => {
    e.preventDefault();

    const value = e.currentTarget.elements.name_movie.value;
    formValue(value);
  };

  return (
    <div>
      <form action="" autoComplete="off" onSubmit={submitForm}>
        <input autoFocus type="text" name="name_movie" defaultValue={value} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchMovie.propTypes = {
  formValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchMovie;
