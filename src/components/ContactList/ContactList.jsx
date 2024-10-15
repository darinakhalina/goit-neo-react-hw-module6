import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList({ contacts, onContactDelete }) {
  const contactsFromStore = useSelector(selectContacts);
  console.log('contacts from store', contactsFromStore);
  return (
    <ul className={css['contact-list']}>
      {contacts.map(contact => (
        <li className={css['contact-list-item']} key={contact.id}>
          <Contact contact={contact} onDelete={onContactDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
