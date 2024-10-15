import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(selectContacts);

  if (!contacts || contacts.length === 0) {
    return <p>No contacts found.</p>;
  }
  return (
    <ul className={css['contact-list']}>
      {contacts.map(contact => (
        <li className={css['contact-list-item']} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
