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
          fontSize="large"
          style={{
            color: 'goldenrod',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        />
      </button>
      <div>
        <button style={{ marginRight: '15px' }} onClick={() => leftAction()}>
          <ArrowLeftIcon
            fontSize="large"
            style={{
              color: 'goldenrod',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          />
        </button>
        <button onClick={() => rightAction()}>
          <ArrowRightIcon
            fontSize="large"
            style={{
              color: 'goldenrod',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          />
        </button>
      </div>
      <button onClick={() => downAction()}>
        <ArrowDropDownIcon
          fontSize="large"
          style={{
            color: 'goldenrod',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        />
      </button>
    </S.MobileArrowContainer>
  );
};
