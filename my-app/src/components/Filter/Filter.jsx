import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.form}>
      <label>
        <p className={styles.title}>Filter</p>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    value: state.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.filterValue(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
