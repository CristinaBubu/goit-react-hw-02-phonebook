import style from './phonebookForm.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    let contactForAdd = { name: this.state.name, number: this.state.number };
    this.props.onSubmitData(contactForAdd);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
        <>
      <h1 className={style.title}>Phonebook</h1>
      <div className={style.form}>
        <form type="submit" onSubmit={this.handleSubmit}>
          <label className={style.label}>
            Name
            <input
              type="text"
              name="name"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label className={style.label}>
            Number
            <input
              type="tel"
              name="number"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
      </>
    );
  }
}

PhonebookForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};
export default PhonebookForm;