import { Box, Stack, Typography } from "@mui/material";

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
        <Box width={260}></Box>
        <Box
          sx={{
            position: "relative",
            width: 200,
            height: 80,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <Typography fontFamily="BTitr" variant="h1">
              علی اطهری
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
            <Typography fontFamily="Arial" variant="h2" fontWeight={100}>
              Ali Athary
            </Typography>
          </Box>
        </Box>
        <Box sx={{ px: 10 }}>
          <Typography fontFamily="BTitr" variant="h4">
            برنامه نویس بک‌اند
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Banner;
