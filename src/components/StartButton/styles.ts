import styled from "styled-components";

export const StyledStartButton = styled.button`
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 20px;
    min-height: 30px;
    width: 100%;
    border-radius: 10px;
    font-weight: bold;
    text-shadow: 1.25px 0 , -1.25px 1.25px 0 #f00; 
    border: 2px solid goldenrod;
    color: goldenrod;
    background: rgba(0, 0, 0, 0.75);
    font-size: 2rem;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        background-color: darkred;
    }
    &:active {
        transform: translateY(5px);
        color: white;
        background-color: rgba(0, 0, 0, 0.9);
    }

    @media (max-width: 768px) {
        padding: 5px;
    }
`;