import axios from 'axios';
import * as actions from './pb-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`./contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error)));
};
