import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './components/contact-form/ContactForm';
import ContactList from './components/contact-list/ContactList';
import SearchBox from './components/search-box/SearchBox';
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectIsLoading } from './redux/contactsSlice';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phone Book</h1>

      <ContactForm />

      <SearchBox />

      {isLoading && !error && <b>Request in progress...</b>}

      <ContactList />
    </>
  )
}

export default App
