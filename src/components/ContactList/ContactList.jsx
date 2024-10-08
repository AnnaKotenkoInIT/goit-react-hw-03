import Contact from '../Contact/Contact';
import c from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={c.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
