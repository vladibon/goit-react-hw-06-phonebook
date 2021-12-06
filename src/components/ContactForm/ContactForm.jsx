import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/Input';
import s from './ContactForm.module.scss';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Input
        type='text'
        name='name'
        labelName='Name'
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={setName}
      />
      <Input
        type='tel'
        name='number'
        labelName='Number'
        value={number}
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        required
        onChange={setNumber}
      />
      <button className={s.button} type='submit'>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const MemoContactForm = memo(ContactForm);

export { MemoContactForm as ContactForm };
