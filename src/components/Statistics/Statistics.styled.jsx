import styled from 'styled-components';

const StatList = styled.ul`
  padding-bottom: 30px;
  padding-left: 30px;

  font-size: 18px;
  color: #768696;
`;

const StatListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Span = styled.span`
  margin-left: 10px;

  font-weight: 600;
  color: #112236;
`;

export { StatList, StatListItem, Span };
