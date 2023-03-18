import {
  List,
  Item,
  FieldName,
  FieldNum,
  DeleteBtn,
} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <Item key={id}>
          <FieldName>{name}:</FieldName>
          <FieldNum>{phone}</FieldNum>
          <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

export default ContactsList;
