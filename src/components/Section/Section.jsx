import PropTypes from 'prop-types';
import {
  SectionWrapper,
  Container,
  Wrapper,
  Title,
} from 'components/Section/Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Container>
        <Wrapper>
          <Title>{title}</Title>
          {children}
        </Wrapper>
      </Container>
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
