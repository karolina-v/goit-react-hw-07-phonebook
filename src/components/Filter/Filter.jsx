import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import actions from '../../redux/contacts/actions';


function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const change = event => dispatch(actions.changeFilter(event.target.value));

  
  return (
        <div>
            <h3>Find contacts by name</h3>
            <input
            type="text"
            name="filter"
            value={value}
            onChange={change}
            />
        </div>
    );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Filter;