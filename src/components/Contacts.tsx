import { Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import resumeData from "../data/ali-resume.json";
import type { ReactNode } from "react";

interface Contact {
  text: string;
  icon: ReactNode;
}

const contacts: Contact[] = [
  {
    text: resumeData.contacts.phone,
    icon: <PhoneIcon />,
  },
  {
    text: resumeData.contacts.email,
    icon: <EmailIcon />,
  },
  {
    text: resumeData.contacts.linkedin,
    icon: <LinkedInIcon />,
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
          <Stack direction="row" sx={{ alignItems: "center" }}>
            {c.icon}
            <Typography
              fontFamily="Arial"
              variant="body1"
              sx={{
                mr: 1,
                direction: "ltr",
                textAlign: "end",
                wordBreak: "break-all",
                overflowWrap: "break-word",
              }}
            >
              {c.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Contacts;
