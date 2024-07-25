import React, { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Button, Typography, Pagination, Box } from "@mui/material";
import { styled } from '@mui/material/styles';

// Custom Card component with white border and hover effect
const CustomCard = styled(Card)(({ theme }) => ({
  border: `2px solid ${theme.palette.common.white}`, // White border for contrast
  borderRadius: '12px',
  boxShadow: theme.shadows[5], // Slight shadow for a subtle lift effect
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10], // Enhance shadow on hover
  },
}));

// Custom Button with primary color
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const allArticles = [
  {
    id: 1,
    title: "Article Title 1",
    imageUrl: "../assets/mongo.png",
    link: "link_to_article1"
  },
  {
    id: 2,
    title: "Article Title 2",
    imageUrl: "../assets/DP00141.jpg",
    link: "link_to_article2"
  },
  // Add more articles as needed
];

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = allArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <Box sx={{ padding: 4, backgroundColor: '#121212', color: '#fff' }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Articles
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {currentArticles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <CustomCard>
              <CardMedia
                component="img"
                height="200"
                image={article.imageUrl}
                alt={article.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {article.title}
                </Typography>
                <CustomButton
                  variant="contained"
                  onClick={() => window.open(article.link, "_blank")}
                >
                  View Article
                </CustomButton>
              </CardContent>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Pagination
          count={Math.ceil(allArticles.length / articlesPerPage)}
          page={currentPage}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default Articles;
