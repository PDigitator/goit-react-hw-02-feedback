import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 30px 0;
`;

const Container = styled.div`
  width: 100%;

  margin: 0 auto;
  padding: 0 15px;

  max-width: 480px;
`;

const Wrapper = styled.div`
  border: 1px solid #e5eaf1;
  border-radius: 8px;
  overflow: hidden;

  background-color: #f3f6f9;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

const Title = styled.h2`
  padding: 30px;

  text-align: center;

  font-size: 26px;
  font-weight: bold;
  color: #112236;
`;

export { SectionWrapper, Container, Wrapper, Title };
