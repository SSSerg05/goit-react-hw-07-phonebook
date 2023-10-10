
// components
import { Section } from "../Section/Section";
import { Form } from "./Form/Form";
import { Search } from "./Search/Search";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactsList/ContactsList";

// style
import { DeskPhonebook } from "./Phonebook.styled";


export const Phonebook = () => {
  
  return (
    <DeskPhonebook>
      <Section title={"Phonebook: HW-6 Redux"}>
        <Form />
      </Section>
        
      <Section>
        <Search />
        <Filter />
      </Section>
      
      <Section title={"Contacts"}>
        <ContactsList />
      </Section>
    </DeskPhonebook>
  )
}
