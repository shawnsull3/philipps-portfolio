import { sanityClient } from '@/lib/sanityClient';
import { Container, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { cache } from 'react';

// Fetch data at build time (SSG)
const getWritingSamples = cache(async () =>
  sanityClient.fetch(
    `*[_type == "writingSample"]{ 
      _id, 
      title, 
      description, 
      "previewImageUrl": previewImage.asset->url, 
      "pdfUrl": pdf.asset->url 
    }`,
    { next: { revalidate: false } } // Fetch only at build time
  )
);

const WritingSamplesPage = async () => {
  const samples = await getWritingSamples();

  return (
    <Container>
      <Typography variant="h3" textAlign="center" gutterBottom>
        Writing Samples
      </Typography>
      {samples.map((sample) => (
        <Card key={sample._id} sx={{ maxWidth: 345, marginBottom: 3 }}>
          <CardMedia component="img" height="140" image={sample.previewImageUrl} alt={sample.title} />
          <CardContent>
            <Typography variant="h5">{sample.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {sample.description}
            </Typography>
            {sample.pdfUrl && (
              <Button 
                variant="contained" 
                color="secondary" 
                href={sample.pdfUrl} 
                target="_blank" 
                sx={{ mt: 2 }}
              >
                View PDF
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default WritingSamplesPage;
