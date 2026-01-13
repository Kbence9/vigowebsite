import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Logo.jpg';
import axios from 'axios';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from './hero.jpg';
import image1 from './image1.jpg';  
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image9 from './image9.jpg';  
import image10 from './image10.jpg';
import image11 from './image11.jpg';
import image12 from './image12.jpg';
import image13 from './image13.jpg';
import image14 from './image14.jpg';
import image15 from './image15.jpg';
import image16 from './image16.jpg';
import image17 from './image17.jpg';  
import image18 from './image18.jpg';
import image19 from './image19.jpg';
import image20 from './image20.jpg';
import image21 from './image21.jpg';
import image22 from './image22.jpg';
import image23 from './image23.jpg';
import image24 from './image24.jpg';

function App() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,  // Engedélyezi az ismételt animációt
      mirror: true,  // Animálja ki (fade-out) amikor scroll out, és be újra amikor vissza
      offset: 200,  // Nagyobb offset a késleltetéshez
    });
  }, []);

  const validateEmail = (email) => {
const re = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
return re.test(String(email).toLowerCase());
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Kérjük, töltse ki az összes mezőt!');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Kérjük, adjon meg egy érvényes email címet!');
      return;
    }

    try {
      await axios.post('https://formspree.io/f/mykzrayl', formData);
        alert('Üzenet elküldve!');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      alert('Hiba!');
    }
  };
  
  return (
    <ParallaxProvider>
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg" style={{ backgroundColor: '#0f172a' }}>
        <Container>
          <Navbar.Brand href="#home" className="logo-container">
            <div className="logo-container" style={{ position: 'relative', width: '150px', height: '150px' }}>
  <img src={logo} className="logo-front" alt="Front" style={{ width: '100%', height: '100%' }} />
  <img src={logo} className="logo-back" alt="Back" style={{ width: '100%', height: '100%', transform: 'rotateY(180deg)' }} /> 
</div>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#szolgaltatasok">Szolgáltatások</Nav.Link>
            <Nav.Link href="#galeria">Galéria</Nav.Link>
            <Nav.Link href="#kapcsolat">Kapcsolat</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Parallax translateY={[-20, 20]}>
        <div 
        id="home"
        className="hero-section" 
        style={{ 
          backgroundImage: `url(${heroImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '70vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: 'yellow',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          fontWeight: 800 
        }}
      >
        <div className="text-center">
          <h1>Vigo Bausystem – Padlástér Specialista</h1>
          <p>Professzionális gipszkarton szerelés tetőterekbe, minőségi anyagokkal és precíz munkával.</p>
        </div>
      </div>
      </Parallax>

        {/* Szolgáltatások section */}
      
        <section id="szolgaltatasok" className="py-5 bg-light">
        <Container fluid>  {/* Fluid a full-width-hez */}
          <h2 className="text-center mb-5">Szolgáltatásaink és Tippek</h2>

          {/* Első szolgáltatás: Full-width row, kép bal, szöveg jobb */}
          <Row className="align-items-center mb-5" data-aos="fade-in">
            <Col md={6} data-aos="fade-right">
              <img src={image1} alt="Padlástér szerelés" className="img-fluid rounded" data-title="Tetőteri Tűzvédelem" />
            </Col>
            <Col md={6} data-aos="fade-left">
              <h3>Tetőtéri tűzvédelem</h3>
              <p>A padlástéri lakótér kialakításában fontos előkészületi tényező a minimum 20 perces tűzvédelem, amit az egybefüggő szerkezetre felcsavarozott gipszkarton és annak glettelése tesz lehetővé.</p>
            </Col>
          </Row>

          {/* Második: Fordított sorrend a változatosságért (szöveg bal, kép jobb) */}
          <Row className="align-items-center mb-5" data-aos="fade-in" data-aos-delay="200">
            <Col md={6} data-aos="fade-right">
              <h3>Szigetelési tényezők</h3>
              <p>A szigetelés vastagsága jelentős befolyással van a lakótér kellemes érzetére. Ezen kívül az egybefüggő, precíz szigetelésnek köszönhetően a hőhidak nem jelennek meg.</p>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img src={image2} alt="Szigetelés" className="img-fluid rounded" />
            </Col>
          </Row>

          {/* Harmadik: Újra kép bal, szöveg jobb */}
          <Row className="align-items-center mb-5" data-aos="fade-in" data-aos-delay="400">
            <Col md={6} data-aos="fade-right">
              <img src={image3} alt="Tűzvédelem" className="img-fluid rounded" />
            </Col>
            <Col md={6} data-aos="fade-left">
              <h3>Párazárási technológia</h3>
              <p>Az egybefüggő párazárás könnyen kialakítható a szerkezet összefüggősége miatt, ami a külső és belső hőmérséklet-különbség miatti lecsapódásból származik. Ezen pára megjelenése a szigetelés bármely területén képződhet – ezt persze mi nem látjuk –, ezért fontos a 3-5 centiméteres légrés, hogy kiszáradjon, és így ne károsodjon a tetőszerkezet.</p>
            </Col>
          </Row>

        {/* Galéria */}

        <h2 id="galeria" className="text-center mb-5" style={{ color: '#1e293b' }}>Galéria</h2>
<Row>
  <Col md={4} data-aos="fade-up">
    <img src={image1} alt="Projekt 1" className="img-fluid rounded service-img mb-3" data-title="Tetőteri Tűzvédelem" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image2} alt="Projekt 2" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image3} alt="Projekt 3" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image4} alt="Projekt 4" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image5} alt="Projekt 5" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image6} alt="Projekt 6" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image7} alt="Projekt 7" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image8} alt="Projekt 8" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image9} alt="Projekt 9" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image10} alt="Projekt 10" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image11} alt="Projekt 11" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image12} alt="Projekt 12" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image13} alt="Projekt 13" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image14} alt="Projekt 14" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image15} alt="Projekt 15" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image21} alt="Projekt 21" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image16} alt="Projekt 16" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image17} alt="Projekt 17" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image18} alt="Projekt 18" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image19} alt="Projekt 19" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image20} alt="Projekt 20" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image22} alt="Projekt 22" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image23} alt="Projekt 23" className="img-fluid rounded service-img mb-3" />
  </Col>
  <Col md={4} data-aos="fade-up" data-aos-delay="200">
    <img src={image24} alt="Projekt 24" className="img-fluid rounded service-img mb-3" />
  </Col>
</Row>

<Container>
  <h2 id="kapcsolat" className="text-center mb-5" style={{ color: '#1e293b' }}>Kapcsolat</h2>
  <Row>
    <Col md={6}>
      <p style={{ color: '#1e293b' }}>Elérhetőségek: Email: vigobausystem@gmail.com | Telefon: +36 70 881 8473</p>
      <p>Árajánlat kéréshez kérem vegye fel a kapcsolatot telefonon vagy emailben.</p>
      <p>Telefonon Hétfőtől-Péntekig 8:00-18:00 között</p>
    </Col>
    <Col md={6}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Név</Form.Label>
          <Form.Control type="text" placeholder="Írja be a nevét" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Írja be az emailjét" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Üzenet</Form.Label>
          <Form.Control as="textarea" rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required/>
        </Form.Group>
        <Button variant="primary" type="submit" style={{ backgroundColor: '#0284c7' }}>Küldés</Button>
      </Form>
    </Col>
  </Row>
</Container>
        
      </Container>
      </section>
      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2026 Vigo Bausystem. Minden jog fenntartva.</p>
      </footer>
    </>
    </ParallaxProvider>
  );
}

export default App;
