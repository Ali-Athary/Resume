import { Box, Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Resume() {
  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 900,
        mx: "auto",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Ali Athary
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        <Grid size={6}>
          <Typography variant="h6">Experience</Typography>
          <Typography fontWeight={600}>
            Backend Developer Intern — 2023
          </Typography>
          <Typography variant="body2">
            Worked on Spring Boot services, Kafka, Oracle…
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="h6">Skills</Typography>
          <Typography variant="body2">
            React, MUI, Spring Boot, Kafka, Oracle
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
