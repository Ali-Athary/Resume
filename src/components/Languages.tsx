import { Box, Stack, Typography } from "@mui/material";

const contacts = [
  {
    textE: "Farsi",
    textF: "فارسی",
  },
  {
    textE: "English",
    textF: "انگلیسی",
  },
];

const Languages = () => {
  return (
    <Stack spacing={3} sx={{ direction: "rtl" }}>
      <Typography fontFamily="Arial" variant="h4" textAlign="center">
        زبان
      </Typography>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          width: "100%",
        }}
      >
        {contacts.map((c) => (
          <Stack
            direction="row"
            sx={{
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1">{c.textF}</Typography>
            <Typography fontFamily="Arial" variant="body1">
              {c.textE}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Languages;
