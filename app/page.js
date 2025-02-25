import { Container, Typography, Avatar } from '@mui/material';

export default function Home() {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Avatar 
        src="/profile.jpg"
        sx={{ width: 150, height: 150, margin: 'auto' }}
        alt="Steph Philipps"
      />
      <Typography variant="h4" sx={{ mt: 2 }}>Steph Philipps</Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, margin: 'auto', mt: 2 }}>
        Hi, I'm a passionate developer specializing in modern web technologies. 
        I love building dynamic and responsive applications using React and Next.js.
      </Typography>
    </Container>
  );
}