import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContacts = createAction('contacts/add', ({ name, number }) => {
    return {
        payload: {
            id: shortid.generate(),
            name,
            number,
        }
    };
});

const deleteContacts = createAction('contacts/delete');
const changeFilter = createAction('contacts/filter')


export default { addContacts, deleteContacts, changeFilter };