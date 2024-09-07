import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from '../contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const phoneBook = useSelector(selectFilteredContacts);

  return (
    <div className={css.list}>
      {phoneBook.map(item => (
        item.id && <Contact key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
