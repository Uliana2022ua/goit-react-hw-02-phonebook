import { Component } from 'react';
import Filter from 'components/Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';
import ContactForm from '../ContactForm/ContactForm';
import { Container, Title, FormContainer } from './App.styled';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const oldContact = this.state.contacts.map(oldContact =>
      oldContact.name.toLowerCase()
    );

    if (oldContact.includes(data.name.toLowerCase())) {
      return alert(`${data.name} is alredy in contacts`);
    }

    const newContact = { id: nanoid(2), ...data };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title>PhoneBook</Title>

        <FormContainer>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </FormContainer>

        <Title>Contacts</Title>

        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <ContactsList
          visibleContacts={visibleContacts}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;