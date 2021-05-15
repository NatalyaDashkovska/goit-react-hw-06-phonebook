import React from 'react';

import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import phonebookActions from './redux/phonebook/phonebook-actions';
import styles from './index.module.css';
const App = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};
const mapDispatchToProps = dispatch => ({
  makeCard: text => dispatch(phonebookActions.makeCard(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
