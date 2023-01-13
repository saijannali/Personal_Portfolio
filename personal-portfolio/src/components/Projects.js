import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import court_check from "../assets/img/court-check.png";
import court_check2 from "../assets/img/proj-cc.png";
import riq from "../assets/img/r-iq.jpg";
import riq2 from "../assets/img/retail-smart.png";
import alter_color from "../assets/img/alter-color.png";
import alter_color2 from "../assets/img/alter-color2.png";
import minesweeper from "../assets/img/minesweeper.png";
import minesweeper2 from "../assets/img/minesweeper2.png";
import bst from "../assets/img/bst.png";
import bst2 from "../assets/img/bst2.png"
import kaggle from "../assets/img/kaggle-icon.png"
import kaggle2 from "../assets/img/kaggle.png"
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import Carousel from "react-bootstrap/Carousel";
import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';


export const Projects = () => {

    const projects = [
    {
      title: "Court Check",
      description: "iOS mobile application designed to allow users to update player traffic at verious locations. This app was made using Firebase and NodeJS along with frameworks such as SwiftUI & MapKit",
      imgUrl: court_check,
      imgUrl2: court_check2,
    },
    {
      title: "Retail Smart",
      description: "iOS mobile platform that connects local vendors and retailers. This app was made using Firebase, NodeJs, HTML/CSS, and SwiftUI with various frameworks",
      imgUrl: riq,
      imgUrl2: riq2,
    },
    {
      title: "Alter Color",
      description: "This was my first application created using swift",
      imgUrl: alter_color,
      imgUrl2: alter_color2,
    },
  ];
  const projects2 = [
    {
      title: "Minesweeper",
      description: "A timeless classic featuring various difficulty levels and a results tracking mechanism. This application was done in Java and includes JUnit Tests",
      imgUrl: minesweeper,
      imgUrl2: minesweeper2,
    },
    {
      title: "Binary Search Tree GUI",
      description: "Design & Development",
      imgUrl: bst,
      imgUrl2: bst2,
    },
    {
      title: "College Placement Model",
      description: "Design & Development",
      imgUrl: kaggle,
      imgUrl2: kaggle2,
    },
  ];


  return(
    <section className="project" id="project">
      <h2> Projects </h2>
      <Carousel>
        <Carousel.Item>
         <Container>
            <Row id="row">
              {
                projects.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                      />
                  )
                })
              }
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
        <Container>
            <Row id="row">
              {
                projects2.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                      />
                  )
                })
              }
            </Row>
          </Container>         
        </Carousel.Item>
      </Carousel>
      {/* <img className="background-image-right" src={colorSharp2} alt="Image" /> */}
    </section>
  )
}

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//   ];

//   return (
//     <section className="project" id="project">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }