import React from 'react';

import { StyledPauseButton } from '../styles/styles.ts';

const PauseButton = ({ callback, text }) => (
  <StyledPauseButton onClick={callback}>{text}</StyledPauseButton>
);

export default PauseButton;
