import styled from "styled-components"

// eslint-disable-next-line react/prop-types
export const Button = ({classe, click, title}) => {
    return(
        <Container className={classe} onClick={click}>
            {title}
        </Container>
    );
}

const Container = styled.button`
    height: 46px;
    background-color: blueviolet;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    padding: 0 26px;
    border: 2px solid transparent;
    cursor: pointer;
    font-weight: bold;
    transition-duration: 200ms;
    &.outlined {
        border-color: blueviolet;
        background-color: transparent;
        color: blueviolet;
    }
    &.pilled {
        border-radius: 25px;
    }
    &.hover {
        background-color: #8d33e0;
    }
    &.circle {
        padding: 0;
        width: 40px;
        height: 40px;
    }
    &.w-full {
        width: 100%;
    }
`;
