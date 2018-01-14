import React from 'react';
import styled from 'styled-components';

const Display = ({ children }) => (
  <StyledDisplay>
    {children}
    <GridOverlay />
    <Overlay />
  </StyledDisplay>
);

const StyledDisplay = styled.div`
  position: relative;
  background: #0e0604;
  color: #d5bd2a;
  height: 120px;
  width: 250px;
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
  outline: 2px solid rgba(255, 255, 255, 0.05);
  outline-offset: -1px;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 1%,
    rgba(255, 255, 255, 0.08) 55%,
    rgba(255, 255, 255, 0.4) 60%,
    rgba(255, 255, 255, 0.02) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset 0px 0px 31px 24px rgba(0, 0, 0, 0.6);
`;

export default Display;
