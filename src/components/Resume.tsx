import { Box, Stack } from "@mui/material";
import myImage from "../assets/Profile_1.jpg";
import Contacts from "./Contacts";
import Banner from "./Banner";
import Body from "./Body";
import Languages from "./Languages";
import Education from "./Education";

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
        <Body />
        <Box
          sx={{
            width: "250px",
            height: "100%",
            bgcolor: "background.panel",
            color: "text.panelPrimary",
          }}
        >
          <Stack
            mt="20px"
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
            <Stack spacing={4} sx={{ width: "100%", px: 4 }}>
              <Contacts />
              <Box
                sx={{ width: "100%", height: 3, bgcolor: "background.banner" }}
              />
              <Languages />
              <Box
                sx={{ width: "100%", height: 3, bgcolor: "background.banner" }}
              />
              <Education />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
