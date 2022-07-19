import styled from "styled-components";
import help from "../../assets/help.svg";

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

export const TetrisTitle = styled.img`
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const MobileOuterActionContainer = styled.div`
    display: flex;
`;

export const MobileActionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MobileActionInnerContainer = styled.div`
    display: flex;
`;

export const SignatureMobile = styled.a`
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