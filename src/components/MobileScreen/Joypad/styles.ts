import styled from "styled-components";

export const MobileArrowContainer = styled.div`
    margin-top: 7px;
    width: 100px;
    align-self: space-between;
    margin-right: 5px;
    margin-left: -5px;
    padding: 5px 15px;

    button {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 33%;
        border: 3.5px solid goldenrod;
        margin: 1px;
        width: 38px;
        height: 35px;

        &:focus {
            background-color: darkred;
        }
    }
`;