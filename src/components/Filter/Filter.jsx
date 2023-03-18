import { Label, Input } from '../Phonebook/Phonebook.styled';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contact by name
      <Input
        type="text"
        onChange={e => dispatch(filteredContacts(e.target.value))}
      />
    </Label>
  );
};

export default Filter;
