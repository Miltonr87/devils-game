import {
  ShowMobileGuideButton,
  MobileActionInnerContainer,
  MobileActionContainer,
  MobileOuterActionContainer,
  TetrisTitle,
  SignatureMobile,
} from './styles';
import { Joypad } from './Joypad';
import { GameOver } from '../GameOver';
import { StartButton } from '../StartButton';
import { PauseButton } from '../PauseButton';
import logo from '../../assets/tetris.svg';

interface MobileScreenProps {
  upAction: any;
  leftAction: any;
  rightAction: any;
  downAction: any;
  startGame: any;
  pauseGame: any;
  paused: boolean;
  pauseText: string;
  showNavAction: any;
  gameOver: boolean;
  score: number;
  rows: number;
  level: number;
}

export const MobileScreen = ({
  upAction,
  leftAction,
  rightAction,
  downAction,
  startGame,
  gameOver,
  pauseGame,
  paused,
  pauseText,
  score,
  rows,
  level,
  showNavAction,
}: MobileScreenProps) => {
  const date = new Date().getFullYear();
  return (
    <>
      <ShowMobileGuideButton onClick={() => showNavAction()} />
      <MobileActionInnerContainer>
        <TetrisTitle className="desktop-logo" src={logo} />
        {gameOver ? (
          <GameOver text="🔥 HIGHWAY TO HELL !!!" gameOver={gameOver} />
        ) : null}
      </MobileActionInnerContainer>
      <MobileOuterActionContainer>
        {paused || gameOver ? null : (
          <Joypad
            upAction={() => upAction()}
            leftAction={() => leftAction()}
            rightAction={() => rightAction()}
            downAction={() => downAction()}
          />
        )}
        <MobileActionContainer>
          <MobileActionInnerContainer>
            <GameOver text={`${score}`} />
            <GameOver text={`💛 ${rows}`} />
            <GameOver text={`🤘 ${level}`} />
          </MobileActionInnerContainer>
          <StartButton gameOver={gameOver} callback={startGame} />
          {gameOver ? null : (
            <PauseButton callback={pauseGame} text={pauseText} />
          )}
          <SignatureMobile>© Milton Rodrigues - {date}</SignatureMobile>
        </MobileActionContainer>
      </MobileOuterActionContainer>
    </>
  );
};
