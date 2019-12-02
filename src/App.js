import React from 'react';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Col, Container, Button, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
const img1 = require('./images/74427190_2454586588142571_4094831973309087744_n.jpg')
const img2 = require('./images/77088852_2475938972673999_1116830933073264640_n.jpg')

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <Row style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Col sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <p style={{ textAlign: "center" }}>
            <i>Associação de defesa dos direitos dos usuários de serviços de saúde mental - Porto Alegre, RS.</i>
          </p>
        </Col>

      </Row>

      <Row style={{ padding: "40px" }}>
        <Col sm={{ size: 4, offset: 4 }} md={{ size: 2, offset: 5 }} style={{ borderBottom: "1px solid gray", height: "1px" }}>
        </Col>
      </Row>

      <Row style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Col sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <p style={{ textAlign: "center", fontSize: "20px !important" }}>
            <b>Impressão sublimática em Tecido, canecas, azulejos etc.</b>
          </p>
        </Col>
      </Row>

      <Row style={{ padding: "40px" }}>
        <Col sm={{ size: 4, offset: 4 }} md={{ size: 2, offset: 5 }} style={{ borderBottom: "1px solid gray", height: "1px" }}>
        </Col>
      </Row>

      <Row style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Col sm={{ size: 10, offset: 1 }} md={{ size: 4, offset: 4 }}>
          <p style={{ textAlign: "center" }}>
            <i>Reuniões fixas todas as segundas-feiras das 14h às 16:30h, aberta ao publico, porém é necessário pedir que um membro abra a porta do prédio para acesso, pois não tem porteiro/portaria no local.
          </i>
          </p>
        </Col>
      </Row>

      <Row style={{ padding: "40px" }}>
        <Col sm={{ size: 2, offset: 5 }} md={{ size: 2, offset: 5 }} style={{ borderBottom: "1px solid gray", height: "1px" }}>
        </Col>
      </Row>

      <Row style={{ padding: "40px" }}>
        <Col sm={{ size: 2, offset: 5 }} md={{ size: 2, offset: 5 }} style={{paddingTop:"10px",height:"50px", boxShadow: "1px 1px 5px #888888 !important", color: "white", backgroundColor: "rgb(140, 220, 207)"}}>
          <p>Confira nossos produtos:</p>
        </Col>
      </Row>

      <Row style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Col sm={{ size: 10, offset: 1 }} md={{ size: 4, offset: 2 }} style={{}}>
          <img src={img1}  style={{boxShadow: "1px 1px 5px #888888 !important", border:"2px solid #fff", maxWidth:"100%",maxHeight:"100%"}}/>
        </Col>
        <Col sm={{ size: 10, offset: 1 }} md={{ size: 4, offset: 0 }}>
          <img src={img2}  style={{boxShadow: "1px 1px 5px #888888 !important", border:"2px solid #fff", maxWidth:"100%",maxHeight:"100%"}}/>
        </Col>
      </Row>

      <Row style={{ padding: "40px" }}>
        <Col sm={{ size: 2, offset: 5 }} md={{ size: 2, offset: 5 }} style={{ borderBottom: "1px solid gray", height: "1px" }}>
        </Col>
      </Row>
      
      <Row style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Col sm={{ size: 10, offset: 1 }} md={{ size: 4, offset: 4 }}>
        <iframe
  			frameborder="0" style={{border:0, width:"300px", height:"250px"}}
  			src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyANMjXQn8sXrGqzkNRvKedMUoWv-1lpQCc&q=Rua+Vigário+José+Inácio,303+-+Porto+Alegre+-+RS"}>
		</iframe>
        </Col>
      </Row>

      

      <Footer />
    </div>
  );
}

export default App;
