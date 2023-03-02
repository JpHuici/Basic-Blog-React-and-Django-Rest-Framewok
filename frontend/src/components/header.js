import Container from 'react-bootstarp/Container'
import Navbar from 'react-bootstrap/Navbar';


// This code imports two components from the React Bootstrap library, Container and Navbar, to build a simple navigation bar. The Header function is a React component that returns a JSX element structure representing the navigation bar. In this case, the Navbar component is used to create the navigation bar with a dark background (bg='dark') and white text (variant='dark'). Inside the Navbar component is the Container component, which is used to center the content of the navigation bar and the title "CRUD Django React" is placed using the Navbar.Brand component.
export default function Header() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>CRUD Django React</Navbar.Brand>
            </Container>
        </Navbar>
    )
}