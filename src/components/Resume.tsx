import { Box, Typography, Divider, Stack } from "@mui/material";

export default function Resume() {
  return (
    <Box
      sx={{
        maxWidth: "70.695553vh",
        height: "100vh",
        position: "relative",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <Box
        bgcolor="blue"
        width="50%"
        height={100}
        top={20}
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
            bgcolor: "lightblue",
          }}
        >
          Middle Content
        </Box>

        {/* Right (fixed width or flexible) */}
        <Box
          sx={{
            width: "250px", // fixed width, or use flex if you want
            height: "100%",
            bgcolor: "lightgreen",
          }}
        >
          Right Side
        </Box>
      </Box>
    </Box>
  );
}
