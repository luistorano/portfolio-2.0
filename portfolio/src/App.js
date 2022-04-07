import './App.css';
import { CardGroup, Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import avatar from "./images/Avatar.png"
import project1 from "./images/weather-to-walk.gif"
import project2 from "./images/POC-screencapture.gif"
import project3 from "./images/food4though-demo.gif"
import { Form } from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Luis Torano</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#project-1">Weather to Walk</NavDropdown.Item>
                <NavDropdown.Item href="#project-2">Plenty O' Coders</NavDropdown.Item>
                <NavDropdown.Item href="#project-3">Food4Thought</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      {/* Main Content */}
        <Container>
          <CardGroup>
            <Card style={{ border: 'none' }}>   
                <img src={avatar} alt="Avatar" width="300px" height="300px"></img>                 
            </Card>
            <Card style={{ border: 'none' }}>
              <Card.Body>
                    <p>
                      Hello, my name is Luis. I am a beginner Web Developer.
                      I like working on the front end but want to get better at the backend. 
                      I enjoy coding and I am looking forward to learning a lot more down the road
                    </p>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* Project Area */}
        <Container id='project-1'>
            <h2>My Projects</h2>
            <br></br>
            <br></br>
            {/* Weather To Walk */}
              <Card >
                <h3>Weather To Walk</h3>
                <br></br>
                <br></br>
                  <p>
                    This is my first Project! It is a simple weather app that will show you the breed of your dog and let you know if it is a good day to take your pup for a walk.
                  </p>
              </Card>
              <Card style={{ border: 'none' }} className='d-flex align-items-center'>
                <img id='project-1' src={project1} alt="Project1" width="700" height="350" ></img>
              </Card>
              <br></br>
              <br></br>
              <br></br>
        </Container>


        
              {/* Plenty O' Coders */} 
              <Container>
                <Card id='project-2'>
                <h3>Plenty O' Coders</h3>
                <br></br>
                <br></br>
                  <p>
                    This is my second project. This one was a bit of a challenge. It is a forum-like site that will let you collaborate with other coders in order to hone your skills.
                  </p>
              </Card>
              <Card style={{ border: 'none' }} className='d-flex align-items-center'>
                <img id='project-2' src={project2} alt="Project1" width="700" height="350" ></img>
              </Card>
              <br></br>
              <br></br>
              <br></br>

              </Container>
              
            <Container>
              <Card>
                  <h3 id='project-3'>Food4Thought</h3>
                  <br></br>
                  <br></br>
                  <p>
                    This is my third project. This is a recipe book ap that lets you search for recipes based on categories and show you the recipe as well as it lets you save those recipes to your profile also.
                  </p>
              </Card>
              <Card style={{ border: 'none' }} className='d-flex align-items-center'>
                <img id='project-3' src={project3} alt="Project3" width="700" height="350" ></img>
              </Card>
              <br></br>
              <br></br>
              <br></br>
            </Container>
        


        {/* Contact Area */}

        <Container>
          <h2>Contact Me</h2>
          <Card>
            <Card.Body>
              <p>
                Here are my links to places where you can contact me!
              </p>
              <a href='https://www.linkedin.com/in/luis-torano-serrano-a07a91209/'>
                <i className='fa-brands fa-linkedin fa-2xl'></i>
              </a>
              <br></br>
              <br></br>
            
              <a href='https://github.com/luistorano'>
                <i className='fa-brands fa-github fa-2xl'></i>
              </a>
            </Card.Body>
          </Card>

          <Card style={{ border: 'none' }}>
          <Form>
            <br></br>
            <br></br>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
          </Card>
        </Container>

      {/* Footer */}
      <footer>
        <Card>
          <Card.Body>Still under construction...</Card.Body>
        </Card>
      </footer>
    </div>
  );
}

export default App;
