import styled from 'styled-components';

const BtnList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-bottom: 30px;
`;

const Btn = styled.button`
  width: 80px;
  height: 40px;
  padding: 0;
  border-radius: 20px;

  border: 2px solid #e5eaf1;
  cursor: pointer;

  background-color: #f3f6f9;
  text-transform: capitalize;
  font-size: 18px;

  &:hover,
  &:focus {
    filter: brightness(0.95);
    box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export { BtnList, Btn };
