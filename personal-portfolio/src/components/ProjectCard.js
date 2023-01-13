import { Button, Col, ModalBody } from "react-bootstrap";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const ProjectCard = ({ title, description, imgUrl, imgUrl2 }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} onClick={() => setShow(true)}/>
        <ProjectDetailsModel show={show} onHide={() => setShow(false)}/>
      </div>
    </Col>
  )

  function ProjectDetailsModel(props) {
    return (
      <Modal
        {...props}
        dialogClassName="proj-modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
        className="class-modal"
      >
        {/* <Modal.Header closeButton> </Modal.Header> */}
        <Modal.Body>
          <div className="text-center">
            <h4>{title}</h4>
            <img src={imgUrl2}/>
            <p>
              {description}
            </p>
          </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// function ProjectDetailsModel(props) {
//   return (
//     <Modal
//       {...props}
//       dialogClassName="proj-modal"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       size="lg"
//       className="class-modal"
//     >
//       {/* <Modal.Header closeButton> </Modal.Header> */}
//       <Modal.Body closeButton>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
 
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
