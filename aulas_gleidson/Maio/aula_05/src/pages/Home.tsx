import { styled } from 'styled-components';
import { Title, Button } from './styles';

const Header = styled.header`
    width: 100%;
    height: 50px;
    background-color: blueviolet;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1024px) {
        background-color: blue;
    }
    @media only screen and (max-width: 768px) {
        background-color: green;
    }
    @media only screen and (max-width: 600px) {
        background-color: red;
    }
`

export const Home = () => {
    return (
        <>
        <Header></Header>
        <Title>Página Home</Title>
        <Button className="hover">Enviar</Button>
        </>
    )
}

export default Home;