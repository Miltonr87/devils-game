import React from 'react';
import { StyledPauseButton } from '../styles/styles';

interface PauseButonProps {
  callback: any;
  text: string;
}

const PauseButton = ({ callback, text }: PauseButonProps) => (
  <StyledPauseButton onClick={callback}>{text}</StyledPauseButton>
);

export default PauseButton;
