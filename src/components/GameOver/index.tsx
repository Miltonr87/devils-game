import { StyledGameOver } from './styles';

interface GameOverProps {
  gameOver?: boolean;
  text: string;
}

export const GameOver = ({ gameOver, text }: GameOverProps) => {
  return <StyledGameOver gameOver={gameOver}>{text}</StyledGameOver>;
};
