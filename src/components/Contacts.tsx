import { Stack, Typography } from "@mui/material";

const contacts = [
  {
    text: "+989038426825",
  },
  {
    text: "ali.athary.ce@gmail.com",
  },
  {
    text: "https://www.linkedin.com/in/ali-athary-7b7a2a225/",
  },
];

const Contacts = () => {
  return (
    <Stack direction="column" spacing={1} sx={{ p: 10, color: "white" }}>
      {contacts.map((c) => (
        <Typography variant="body1">{c.text}</Typography>
      ))}
    </Stack>
  );
};

export default Contacts;
