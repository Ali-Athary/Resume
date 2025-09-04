import { Box, Stack, Typography } from "@mui/material";
import resumeData from "../data/ali-resume.json";

const Body = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        pt: 30,
        px: 3,
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{ width: "100%", direction: "rtl", textAlign: "justify" }}
      >
        <Typography variant="h4">درباره من</Typography>
        <Typography>{resumeData.aboutMe}</Typography>
        <Box sx={{ width: "100%", height: 100, bgcolor: "red" }}></Box>
        <Box sx={{ width: "100%", height: 100, bgcolor: "red" }}></Box>
        <Box sx={{ width: "100%", height: 100, bgcolor: "red" }}></Box>
        <Box sx={{ width: "100%", height: 100, bgcolor: "red" }}></Box>
      </Stack>
    </Box>
  );
};

export default Body;
