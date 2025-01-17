import './App.css';
import { styled } from 'styled-components';
import thumnailUrl from './assets/images/thumnail.jpg';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  position: relative;
`;

const Intro = styled.div`
  width: 100dvw;
  height: 100dvh;
  overflow-y: hidden;
  position: relative;
  z-index: 1;
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
`;

const Open = styled(Link)`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  padding: 8px 25px;
  color: #fff;
  border: 1px solid #fff;
  font-weight: bold;
  text-decoration: none;
`;

function App() {

  return (
    <Container>
      <Intro>
        <img style={{width: '100%', height: '100%'}} src={thumnailUrl} alt='mainImage' />
        <Open to="card">
          OPEN 💌
        </Open>
      </Intro>
    </Container>
  );
}

export default App;