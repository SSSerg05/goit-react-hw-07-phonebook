import PropTypes from 'prop-types'; // ES6'
import { Title } from './Section.styled';


export const Section = ({ title, children }) => {
  return (
    <section>
      { title && <Title>{ title }</Title> }
      { children }
    </section>
  );
}

Section.propTypes = {
  title : PropTypes.string,
}