import React from 'react';
import styled from 'styled-components';

const Display = ({ children }) => (
  <StyledDisplay>
    {children}
    <GridOverlay />
    <Overlay />
    <OnDisplayOverlay>Digital drum computer</OnDisplayOverlay>
  </StyledDisplay>
);

const StyledDisplay = styled.div`
  position: relative;
  background: #0e0604;
  color: #d5bd2a;
  height: 120px;
  width: 250px;
  padding: 10px 0;
`;

const OnDisplayOverlay = styled.div`
  position: absolute;
  z-index: 4;
  left: 0;
  right: 0;
  bottom: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 7px;
  padding: 10px 15px;
`;

const GridOverlay = styled.div`
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHUlEQVQYV2NkYGD4z8DAwMiAAP+ROXBh0gQxzAQAzUYEBJdJxCUAAAAASUVORK5CYII=)
    repeat;
  background-size: 2px;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
`;
const Overlay = styled.div`
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  outline: 2px solid rgba(255, 255, 255, 0.05);
  outline-offset: -1px;
  background: linear-gradient(
    150deg,
    rgba(-0, 0, 0, 0.3) 6%,
    rgba(255, 255, 255, 0.3) 18%,
    rgba(255, 255, 255, 0) 31%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset 0px 0px 31px 24px rgba(0, 0, 0, 0.6);
`;

export default Display;
