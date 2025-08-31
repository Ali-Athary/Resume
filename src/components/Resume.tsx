import { Box, Typography, Divider, Stack } from "@mui/material";

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
        bgcolor="blue"
        width="100%"
        height={120}
        top={40}
        position={"absolute"}
        zIndex={10}
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
              width={160}
              height={160}
              bgcolor={"white"}
              sx={{ zIndex: 20 }}
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
