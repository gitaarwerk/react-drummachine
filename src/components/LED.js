import styled from 'styled-components';
import PropTypes from 'prop-types';

const LED = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  background: ${({ lightState }) => (lightState === true ? '#FFF000' : '#330000')};
  margin: 10px;
`;

LED.propTypes = {
  lightState: PropTypes.bool.isRequired
};

export default LED;
