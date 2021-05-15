import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import { connect } from 'react-redux';
const ContactList = ({ contacts, onDeleteCard }) => {
  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(({ id, text, number }) => (
          <li key={id} className={styles.item}>
            <p className={styles.content}>
              {text} : {number}
            </p>
            <button className={styles.button} onClick={() => onDeleteCard(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getVisible = (allContacts, filter) => {
  const normalize = filter.toLowerCase();
  return allContacts.filter(({ text }) =>
    text.toLowerCase().includes(normalize),
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => {
  return {
    contacts: getVisible(contacts, filter),
  };
};
const mapDispatchToProps = dispatch => ({
  onDeleteCard: id => dispatch(phonebookActions.deleteCard(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
