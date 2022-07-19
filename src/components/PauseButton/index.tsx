import { StyledPauseButton } from './styles';

interface PauseButonProps {
  callback: any;
  text: string;
}

export const PauseButton = ({ callback, text }: PauseButonProps) => (
  <StyledPauseButton onClick={callback}>{text}</StyledPauseButton>
);
