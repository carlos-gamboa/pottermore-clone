import React, { Component } from 'react';
import './SpellList.scss';
import PropTypes from 'prop-types';
import Spell from '../spell/Spell';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Actions from '../../redux/actions/actions';
import SearchBar from '../search-bar/SearchBar';
import Filter from '../filter/Filter';
import SpellService from '../../services/spell-service';

class SpellList extends Component {

  constructor() {
    super();
    this.state = {
      spellService: new SpellService(),
      filters: ['Charm', 'Curse', 'Enchantment', 'Spell'],
      activeFilter: '',
      searchQuery: '',
      currentPage: 0,
      pageCount: 0,
      perPage: 6,
      spellsToShow: [],
      filteredSpells: []
    };
  }

  componentDidMount() {
    const spells = this.state.spellService.getSpells();
    this.props.setSpells(spells);
    this.setState({
      filteredSpells: spells,
      pageCount: spells.length / this.state.perPage,
      spellsToShow: spells.slice(0, this.state.perPage)
    });
  }

  getSpellsWithOffset = (offset, spellsArray) => {
    return spellsArray.slice(offset, (offset + this.state.perPage));
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);
    
    this.setState({
      currentPage: selected,
      spellsToShow: this.getSpellsWithOffset(offset, this.state.filteredSpells)
    });
  };

  handleSearch = filter => {
    let filteredSpells;
    let { activeFilter } = this.state;

    if (activeFilter !== ''){
      filteredSpells = this.props.spells.filter(spell => {
        return spell.spell.toLowerCase().startsWith(filter) && spell.type.toLowerCase() === activeFilter.toLowerCase();
      });
    }
    else {
      filteredSpells = this.props.spells.filter(spell => {
        return spell.spell.toLowerCase().startsWith(filter);
      });
    }

    this.setState({
      searchQuery: filter,
      filteredSpells: filteredSpells,
      pageCount: filteredSpells.length / this.state.perPage,
      currentPage: 0,
      spellsToShow: this.getSpellsWithOffset(0, filteredSpells)
    });
  }

  toggleFilter = filter => {
    let newFilter = '';
    let filteredSpells;

    // Check if filter is already active
    if (this.state.activeFilter === filter) {
      filteredSpells = this.props.spells.filter(spell => {
        return spell.spell.toLowerCase().startsWith(this.state.searchQuery);
      });
    }
    else {
      newFilter = filter;
      filteredSpells = this.props.spells.filter(spell => {
        return spell.type.toLowerCase() === filter.toLowerCase() && spell.spell.toLowerCase().startsWith(this.state.searchQuery);
      });
    }
     
    this.setState({
      filteredSpells: filteredSpells,
      pageCount: filteredSpells.length / this.state.perPage,
      currentPage: 0,
      spellsToShow: this.getSpellsWithOffset(0, filteredSpells),
      activeFilter: newFilter
    });
  }
  
  render() {
    const { spellsToShow, filters, activeFilter } = this.state;
    const { house } = this.props;
    return (
      <section className='spell-list'>
        <div className='spell-list__introduction'>
          <h1 className='spell-list__heading'>Spells</h1>
          <p className='spell-list__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat recusandae fugit corporis fugiat alias laborum reprehenderit velit fuga nesciunt tempore quidem, itaque, voluptatem cumque exercitationem, praesentium asperiores vitae necessitatibus voluptatibus!</p>
        </div>
        <div className='spell-list__settings'>
          <div className='spell-list__search-bar'>
            <SearchBar placeholder='Search by name' house={house} onSearch={this.handleSearch.bind(this)}></SearchBar>
          </div>
          <div className='spell-list__filters'>
            { filters.map((filter, index) => {
              return (
                <Filter 
                  key={index}
                  label={filter}
                  house={house}
                  isSelected={filter === activeFilter}
                  onSelect={this.toggleFilter.bind(this)}
                />
              );
            })}
          </div>
        </div>
        <div className='spell-list__container'>
          { spellsToShow.map((spell) => {
            return (
              <Spell 
                key={spell['_id']}
                name={spell.spell}
                type={spell.type}
                effect={spell.effect}
                house={house}
              />
            );
          })}
        </div>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'pagination__break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pagination__page pagination'}
          activeClassName={'pagination__page--active'}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    spells: state.spells,
    house: state.house
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSpells: spells => {
      dispatch({type: Actions.SET_SPELLS, spells});
    }
  };
};

SpellList.propTypes = {
  spells: PropTypes.array,
  house: PropTypes.string,
  setSpells: PropTypes.func
};

SpellList.defaultProps = {
  books: []
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpellList));
