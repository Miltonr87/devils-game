import styled from "styled-components";
import soundOn from "../../assets/soundon.svg";
import soundOff from "../../assets/soundoff.svg";
import bgImage from "../../assets/background.jpg";
import help from "../../assets/help.svg";
import heart from "../../assets/heart.gif";
import flame from "../../assets/flame.gif";

export const TetrisTitle = styled.img`
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const TetrisTitleMobile = styled.img`
    display: none;
    position: absolute;
    width: 100px;
    height: 80px;
    margin-left: calc(50vw - 50px);
    top: 10px;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const SoundControlButton = styled.button`
    background-image: url(${soundOn});
    padding: 20px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    background-repeat: no-repeat;
    background-position: center;
    outline: none;
    background-size: 80%;
    background-color: goldenrod;
    border: 1px solid black;
    cursor: pointer;
    &.off {
        background-image: url(${soundOff});
    }

    @media (max-width: 768px) {
        padding: 11px;
    }
`;

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    overflow: hidden;
`;

export const StyledTetris = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 100vh;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;
    aside {
        margin-left: 10px;
        width: 100%;
        max-width: 250px;
        display: block;
        padding: 0 20px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
        padding-top: 60px;
        justify-content: flex-start;

        aside {
            display: none;
        }
    }
`;

export const StageWrapper = styled.div`
    width: 100%;
    max-width: 25vw;
    width: 100%;
    transition: 2s height ease ;
    margin-bottom: 5px;

    /* Victory Animation */
    &.cleared {
        box-shadow: 0px 0px 11px 11px goldenrod;
        background-image: url(${heart});
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }
    
    /* Game Over Animation */
    &.gameover {
        box-shadow: 0px 0px 11px 11px red;
        background-image: url(${flame});
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }
    @media (max-width: 768px) {
        max-width: 85%;
    }
`;

export const SummaryInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        flex-direction: row;
    }
`;

export const ShowMobileGuideButton = styled.button`
    background-image: url(${help});
    padding: 20px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
    background-color: goldenrod;
    border: 1px solid black;
    cursor: pointer;

    @media (max-width: 768px) {
        display: true;
        padding: 11px;
    }
`;

export const Signature = styled.a`
    color: white;
    font-weight: bold;
    margin-top: 20px;
    display: block;
    font-size: 1rem;
    @media (max-width: 768px) {
        font-size: 12px;
        margin-top: -5px;
    }
`;

/*------------------- GUIDE MODAL -----------------------*/

export const GuideModalTitle = styled.h1`
    margin-top: 0;
    text-align: center;
`;

export const GuideContentContainer = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const GuideContentInnerContainer = styled.div`
    margin-left: 20px;
    font-weight: bold;
    background-color: transparent;
    @media (max-width: 768px) {
        text-align: center;
        margin-left: 0;
    }
`;

export const GuideArrowImage = styled.img`
    width: 200px;
`;

export const CloseGuideModalButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: 4px hidden black;
    font-weight: bold;
    font-size: 1rem;
`;
