import React from 'react';
import { Col, Row } from 'reactstrap';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Row style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Col sm={{ size: 10, offset: 1 }} md={{ size: 4, offset: 4 }}>
          <div style={{ padding: "5px", paddingLeft: "15px", boxShadow: "1px 1px 5px #999999 !important", height: "90%", width: "auto", float: "left", borderRadius: "100px" }}>
            <h4>Fique ligado!</h4>
            <p>
              Venha nos conhecer mais no #1 Episódio do nosso podcast
              <br />
              <i class="fas fa-headphones"></i>
              <a href="https://www.megafono.host/podcast/associacao-com-sinceridade"><b>Rádio Voz da Sinceridade da Associação Construcão</b></a>
              <i class="fas fa-headphones"></i>
              <br />
              <i>Construindo um novo futuro para a nação</i>
            </p>
          </div>
        </Col>
      </Row>
    </footer>)
}

export default Footer;