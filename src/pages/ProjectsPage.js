// src/pages/Projects.js
import React from "react";
import Carousel from "react-material-ui-carousel";
// import "react-material-ui-carousel/lib/styles.css";

const Projects = () => {
  const projectsDone = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/seed/picsum/200/300",
      ],
    },
    // {
    //   id: 2,
    //   title: "Project 2",
    //   description:
    //     "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   images: [
    //     "https://picsum.photos/300",
    //     "https://picsum.photos/301",
    //     "https://picsum.photos/302",
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "Project 3",
    //   description:
    //     "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   images: [
    //     "https://picsum.photos/400",
    //     "https://picsum.photos/401",
    //     "https://picsum.photos/402",
    //   ],
    // },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>Projects Page</h2>
      {projectsDone.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Carousel>
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project ${project.id} Image ${index + 1}`}
              />
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default Projects;
