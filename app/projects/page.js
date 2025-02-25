import { Container, Typography } from '@mui/material';

export default function Projects() {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3">Projects</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Here you'll find my recent projects!
      </Typography>
    </Container>
  );
}
