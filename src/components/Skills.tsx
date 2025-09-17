import { Box, Chip } from "@mui/material";

const Skills = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Chip label="Small" size="small" color="primary" />
      <Chip label="Medium Badge" color="secondary" />
      <Chip label="Large Badge Example" sx={{ fontSize: "1rem", height: 40 }} />
      <Chip label="Another One" color="success" />
      <Chip label="Yet Another" color="error" />
      <Chip label="Extra" size="small" />
      <Chip label="More Badges" />
    </Box>
  );
};

export default Skills;
