import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import c from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={c.contactItem}>
      <div className={c.contactCard}>
        <p className={c.contactTitle}>
          <FaUser className={c.contactIcon} />
          {name}
        </p>
        <p className={c.contactTitle}>
          <FaPhoneAlt className={c.contactIcon} />
          {number}
        </p>
      </div>
      <button
        className={c.deleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
