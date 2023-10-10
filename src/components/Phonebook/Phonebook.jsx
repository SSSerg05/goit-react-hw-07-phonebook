import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// redux
import { fetchContacts } from "redux/operations";
import { selectError, selectLoading } from "redux/selectors";

// components
import { Section } from "../Section/Section";
import { Form } from "./Form/Form";
import { Search } from "./Search/Search";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactsList/ContactsList";

// style
import { DeskPhonebook } from "./Phonebook.styled";


export const Phonebook = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() =>  {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <DeskPhonebook>
      <Section title={"Phonebook: HW-07 Redux, AsyncThunk"}>
        <Form />
      </Section>
        
      <Section>
        <Search />
        <Filter />
      </Section>
      
      <Section title={"Contacts"}>
        { loading && !error && <b>Request in progress...</b> }
        <ContactsList />
      </Section>
    </DeskPhonebook>
  )
}
