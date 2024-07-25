import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Pagination } from '@mui/material';

const allProjects = [
  {
    title: "Study Storm",
    description: "This is a university group project under the Distributed System module, built using microservice architecture. My part is learner service and feedback and rating service.",
    image: "/assets/DP00141.jpg",
    github: "https://github.com/SLIITStudyStorm"
  },
  {
    title: "Vehicle Spare Parts Management System",
    description: "This is a private project developed using Java and JSP for skill development.",
    image: "/assets/path_to_vehicle_spare_parts_image.jpg",
    github: "https://github.com/Sathiradissanayaka45/vehicle_spare_part_system"
  },
  {
    title: "Website using NASA API’s",
    description: "A university project under the Application Framework module using MERN Stack. Hosted the backend using Render and frontend using Firebase.",
    image: "/assets/path_to_nasa_api_image.jpg",
    github: "https://github.com/Sathiradissanayaka45/Nasa-api"
  },
  {
    title: "University Time Table Management System",
    description: "An individual project using Express.js and Node.js to manage university timetables and student enrollments.",
    image: "/assets/path_to_university_timetable_image.jpg",
    github: "https://github.com/Sathiradissanayaka45/University_Time_Table_Managment_System.git"
  },
  {
    title: "Tour Guide Management System",
    description: "A university group project using Java and JSP for managing tour guides.",
    image: "/assets/DP00141.jpg",
    github: "https://github.com/Sathiradissanayaka45/tour-guide_system"
  },
  {
    title: "Online Shopping Cart Application",
    description: "A group project using OSGi Framework for buying items from a shop.",
    image: "/assets/path_to_shopping_cart_image.jpg",
    github: "https://github.com/Sathiradissanayaka45/Shopping_Cart-OSGi.git"
  }
  // Add other projects here...
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Projects
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {currentProjects.map((project, index) => (
          <Card key={index} sx={{ display: 'flex', flexDirection: 'row', boxShadow: 3, backgroundColor: 'background.paper' }}>
            <CardMedia
              component="img"
              sx={{ width: 200, height: 150 }}
              image={project.image}
              alt={project.title}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" color="textPrimary">{project.title}</Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>{project.description}</Typography>
              <Button
                variant="contained"
                color="primary"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Pagination
          count={Math.ceil(allProjects.length / projectsPerPage)}
          page={currentPage}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default Projects;
