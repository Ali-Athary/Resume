import { Box, Stack, Typography } from "@mui/material";

const contacts = [
  {
    textE: "English",
    textF: "انگلیسی",
  },
  {
    textE: "Farsi",
    textF: "فارسی",
  },
];

const Languages = () => {
  return (
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
          <Typography fontFamily="Arial" variant="body1">
            {c.textE}
          </Typography>
          <Typography variant="body1">{c.textF}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default Languages;
