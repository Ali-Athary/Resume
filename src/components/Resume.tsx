import { Box, Typography, Divider, Stack } from "@mui/material";
import myImage from "../assets/Profile_1.jpg";
import Contacts from "./Contacts";
import Banner from "./Banner";

export default function Resume() {
  return (
    <Box
      sx={{
        maxWidth: "70.695553vh",
        height: "100vh",
        position: "relative",
        fontFamily: "Inter, Arial, sans-serif",
        bgcolor: "background.page",
      }}
    >
      <Banner />
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
            bgcolor: "background.panel",
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
