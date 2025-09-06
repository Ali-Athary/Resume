import { Box, Stack, Typography } from "@mui/material";
import resumeData from "../data/ali-resume.json";

const Banner = () => {
  return (
    <Box
      bgcolor="background.banner"
      position={"absolute"}
      sx={{
        width: "100%",
        height: 120,
        top: 50,
        zIndex: 10,
        display: "flex",
        boxShadow: "0px 4px 20px #00000088",
        color: "text.bannerPrimary",
      }}
    >
      <Stack
        direction="row-reverse"
        sx={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box width={270}></Box>
        <Stack spacing={1} sx={{ alignItems: "end" }}>
          <Typography fontFamily="BTitr" variant="h1">
            {resumeData.name}
          </Typography>
          <Typography fontFamily="BTitr" variant="h3">
            {resumeData.title}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Banner;
