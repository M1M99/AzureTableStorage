import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import AddProductForm from '../Actions/AddProduct';
import AddStoreForm from '../Actions/AddStore';

const Header = () => {
    const [showProductModal, setShowProductModal] = useState(false);
    const [showStoreModal, setShowStoreModal] = useState(false);

    const handleProductShow = () => setShowProductModal(true);
    const handleStoreShow = () => setShowStoreModal(true);

    const handleProductClose = () => setShowProductModal(false);
    const handleStoreClose = () => setShowStoreModal(false);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary mb-5">
                <Container>
                    <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#link">Stores</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={handleProductShow}>Add Product</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleStoreShow}>Add Store</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showProductModal} onHide={handleProductClose}>
                <Modal.Header closeButton className="p-2">
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4 m-2">
                    <AddProductForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleProductClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showStoreModal} onHide={handleStoreClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Store</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div><AddStoreForm/></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleStoreClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Header;
