import React, { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Button, Typography, Pagination, Box } from "@mui/material";

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
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {currentArticles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={article.imageUrl}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {article.title}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => window.open(article.link, "_blank")}
                >
                  View Article
                </Button>
              </CardContent>
            </Card>
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
