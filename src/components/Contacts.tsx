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
    <Stack spacing={3} sx={{ direction: "rtl", pt: 4 }}>
      <Typography fontFamily="Arial" variant="h4" textAlign="center">
        تماس با من
      </Typography>
      <Stack direction="column" spacing={1}>
        {contacts.map((c) => (
          <Typography
            fontFamily="Arial"
            variant="body1"
            sx={{
              direction: "ltr",
              textAlign: "end",
              wordBreak: "break-all",
              overflowWrap: "break-word",
            }}
          >
            {c.text}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default Contacts;
