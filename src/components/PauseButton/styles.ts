import styled from "styled-components";

export const StyledPauseButton = styled.button`
    font-size: 1.1rem;
    margin: 10px;
    color: white;
    background-color: rgba(139, 0, 0);
    font-weight: bold;
    width: fit-content;
    margin: auto;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    border: 2px solid white;
    @media (max-width: 768px) {
        margin: -10px 0 20px 0;
        padding: 5px;
        width: 70%;
        align-self: center;
    }
`;