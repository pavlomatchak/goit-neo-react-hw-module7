import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ item }) => {
  const dispatch = useDispatch();
  function deleteItem(id) {
    dispatch(deleteContact(id));
  }

  return (
    <div className={css.item}>
      <div>
        <p><span>&#128100;</span> {item.name}</p>

        <p><span>&#9742;</span> {item.number}</p>
      </div>

      <button
        type="button"
        onClick={() => deleteItem(item.id)}>
          Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
