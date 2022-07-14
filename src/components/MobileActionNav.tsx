import * as S from '../styles/styles';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

interface MobileActionNavProps {
  upAction: any;
  leftAction: any;
  rightAction: any;
  downAction: any;
}

export const MobileActionNav = ({
  upAction,
  leftAction,
  rightAction,
  downAction,
}: MobileActionNavProps) => {
  return (
    <S.MobileArrowContainer>
      <button onClick={() => upAction()}>
        <ArrowDropUpIcon
          fontSize="medium"
          style={{
            color: 'goldenrod',

            fontSize: '1.5rem',
          }}
        />
      </button>
      <div>
        <button style={{ marginRight: '15px' }} onClick={() => leftAction()}>
          <ArrowLeftIcon
            fontSize="medium"
            style={{
              color: 'goldenrod',
              fontSize: '1.5rem',
            }}
          />
        </button>
        <button onClick={() => rightAction()}>
          <ArrowRightIcon
            fontSize="medium"
            style={{
              color: 'goldenrod',

              fontSize: '1.5rem',
            }}
          />
        </button>
      </div>
      <button onClick={() => downAction()}>
        <ArrowDropDownIcon
          fontSize="medium"
          style={{
            color: 'goldenrod',

            fontSize: '1.5rem',
          }}
        />
      </button>
    </S.MobileArrowContainer>
  );
};
