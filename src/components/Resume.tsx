import { Box, Typography, Divider, Stack } from "@mui/material";
import myImage from "../assets/Profile_1.jpg";
import Contacts from "./Contacts";

const colors = {
  bg: "#E9EAF5",
  panel: "#272635",
  banner: "#2c5070",
};

export default function Resume() {
  return (
    <Box
      sx={{
        maxWidth: "70.695553vh",
        height: "100vh",
        position: "relative",
        fontFamily: "Inter, Arial, sans-serif",
        bgcolor: colors.bg,
      }}
    >
      <Box
        bgcolor={colors.banner}
        position={"absolute"}
        sx={{
          width: "100%",
          height: 120,
          top: 50,
          zIndex: 10,
          boxShadow: "0px 4px 20px #00000088",
        }}
      >
        <Box
          sx={{
            position: "relative",
            mt: "20px",
            ml: "300px",
            width: 200,
            height: 80,
            color: "white",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <Typography variant="h1">علی اطهری</Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
            <Typography variant="h2" fontWeight={100}>
              Ali Athary
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
          }}
        >
          Middle Content
        </Box>
        <Box
          sx={{
            width: "250px",
            height: "100%",
            bgcolor: colors.panel,
          }}
        >
          <Stack
            mt="20px"
            direction="column"
            spacing={2}
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={myImage}
              alt="resume-img"
              sx={{
                width: 180,
                height: 180,
                zIndex: 20,
                borderRadius: 40,
                boxShadow: "0px 4px 20px #272635",
              }}
            />
            <Contacts />
            <Box width={200} height={100} bgcolor={"red"} />
            <Box width={200} height={100} bgcolor={"red"} />
            <Box width={200} height={100} bgcolor={"red"} />
            <Box width={200} height={100} bgcolor={"red"} />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
