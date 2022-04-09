import React from 'react';
import './styles/tailwind.css';
import './styles/styles.css';
import Testimonies from './containers/Testimonies';
import Container from './components/Container';
import Navbar from './containers/Navbar';
import Header from './containers/Header';

function App() {
  return (
    <Container className="bg-[#fff] w-full flex flex-col">
      <Navbar />
      <Header />
      <Testimonies />
    </Container>
  );
}

export default App;
