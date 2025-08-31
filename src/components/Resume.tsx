import { Box, Typography, Divider, Stack } from "@mui/material";
import myImage from "../assets/Profile_1.jpg";

export default function Resume() {
  return (
    <Box
      sx={{
        maxWidth: "70.695553vh",
        height: "100vh",
        position: "relative",
        fontFamily: "Inter, Arial, sans-serif",
        bgcolor: "#E8E9F3",
      }}
    >
      <Box
        bgcolor="#B1E5F2"
        position={"absolute"}
        sx={{
          width: "100%",
          height: 120,
          top: 50,
          zIndex: 10,
          boxShadow: "0px 4px 20px #00000088",
        }}
      ></Box>
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
            bgcolor: "#272635",
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
