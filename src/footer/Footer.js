import React from 'react';
import { Container } from 'reactstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footing">
      <Container fluid style={{padding: '4% !important'}}>
        <div style={{padding: 50}}>
            <p>
              Venha nos conhecer mais no #1 Episódio do nosso podcast
              <br />
              <i class="fas fa-headphones"></i>
              <a href="https://www.megafono.host/podcast/associacao-com-sinceridade"><b>Rádio Voz da Sinceridade da Associação Construcão</b></a>
              <i class="fas fa-headphones"></i>
              <br />
              <i>Construindo um novo futuro</i>
              <p><i>(51) 99288-7093</i></p>
            </p>
          </div>
        </Container>
    </footer>)
}

export default Footer;