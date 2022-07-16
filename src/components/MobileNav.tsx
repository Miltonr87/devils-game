import * as S from '../styles/styles';
import { MobileActionNav } from './MobileActionNav';
import { Display } from './Display';
import { StartButton } from './StartButton';
import logo from '../assets/tetris.svg';

interface MobileNavProps {
  upAction: any;
  leftAction: any;
  rightAction: any;
  downAction: any;
  startGame: any;
  showNavAction: any;
  gameOver: boolean;
  score: number;
  rows: number;
  level: number;
}

export const MobileNav = ({
  upAction,
  leftAction,
  rightAction,
  downAction,
  startGame,
  gameOver,
  score,
  rows,
  level,
  showNavAction,
}: MobileNavProps) => {
  const date = new Date().getFullYear();
  return (
    <>
      <S.ShowMobileGuideButton onClick={() => showNavAction()} />
      <S.MobileOuterActionContainer>
        <MobileActionNav
          upAction={() => upAction()}
          leftAction={() => leftAction()}
          rightAction={() => rightAction()}
          downAction={() => downAction()}
        />
        <S.MobileActionContainer>
          <S.MobileActionInnerContainer>
            <S.TetrisTitle className="desktop-logo" src={logo} />
            {gameOver ? (
              <Display text="🔥 HIGHWAY TO HELL !!!" gameOver={gameOver} />
            ) : null}
          </S.MobileActionInnerContainer>
          <S.MobileActionInnerContainer>
            <Display text={`${score}`} />
            <Display text={`💛 ${rows}`} />
            <Display text={`🤘 ${level}`} />
          </S.MobileActionInnerContainer>
          <StartButton gameOver={gameOver} callback={startGame} />
          <S.Signature>© Milton Rodrigues - {date}</S.Signature>
        </S.MobileActionContainer>
      </S.MobileOuterActionContainer>
    </>
  );
};
