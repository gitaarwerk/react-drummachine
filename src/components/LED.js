import styled from 'styled-components';

const LED = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  background: ${({ lightState }) => (lightState === true ? '#FFF000' : '#330000')};
  margin: 10px;
`;

export default LED;
