import React, { Component } from 'react';
import './SearchBar.scss';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  handleTextChange (event) {
    event.preventDefault();
    this.setState({
      text: event.target.value
    });
    this.props.onSearch(event.target.value);
  }

  render() {
    const { text } = this.state;
    const { placeholder, house } = this.props;
    const searchTitleClasses = ['search-bar__title'];
    const searchInputClasses = ['search-bar__input'];

    if (house !== '') {
      searchTitleClasses.push(`search-bar__title--${house.toLowerCase()}`);
      searchInputClasses.push(`search-bar__input--${house.toLowerCase()}`);
    }

    return (
      <div className='search-bar'>
        <p className={searchTitleClasses.join(' ')}>Search</p>
        <input type='text' className={searchInputClasses.join(' ')} placeholder={placeholder} value={text} onChange={(event) => this.handleTextChange(event)
        }/>
      </div>
    );
  }
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  house: PropTypes.string.isRequired
};

export default SearchBar;
