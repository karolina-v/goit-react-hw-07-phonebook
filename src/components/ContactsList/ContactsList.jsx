import React from 'react';
import PropTypes from 'prop-types';
// import ContactsListItem from './ContactsListItem';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/actions';
import { getVisibleContacts } from '../../redux/contacts/selectors';

function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContacts = id => dispatch(actions.deleteContacts(id));


  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  findContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;