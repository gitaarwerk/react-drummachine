import styled from 'styled-components';
import PropTypes from 'prop-types';

const LED = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  background: ${({ lightState }) => (lightState === true ? 'rgba(240,189,38,1)' : '#2f2604')};
  margin: 10px;
  box-shadow: inset 0px -2px 4px 0px rgba(0, 0, 0, 0.3), 0px 0px 7px 0px rgba(240, 166, 38, 1);
`;

LED.propTypes = {
  lightState: PropTypes.bool.isRequired
};

export default LED;
