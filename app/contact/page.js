import { Container, Typography } from '@mui/material';

export default function Contact() {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3">Contact</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Feel free to reach out via email or social media!
      </Typography>
    </Container>
  );
}
