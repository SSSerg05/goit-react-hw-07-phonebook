import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types'; // ES6'

import { deleteContact, toggleCompleted, } from 'redux/contactsSlice';
import { Card, Name, Button, Checkbox } from './Contact.styled';

export const Contact = ({contact}) => {
  const dispatch = useDispatch();

  const {id, name, number, selected=false} = contact;
  const handleDelete = () => dispatch(deleteContact(id));
  const handleToggle = () => dispatch(toggleCompleted(id));
  
  return (
    <Card>
      <label>
        <Checkbox 
          type="checkbox"
          checked={ selected }
          onChange={ handleToggle } 
        />
      </label>
      <Name>{ name + ': ' + number }</Name>
      <Button onClick={ handleDelete }>
        <MdClose size={24} />
      </Button>
      
    </Card>
  )
}

Contact.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
}