import { Stack, Typography } from "@mui/material";
import resumeData from "../data/ali-resume.json";

const Education = () => {
  return (
    <Stack spacing={3} sx={{ direction: "rtl" }}>
      <Typography fontFamily="Arial" variant="h4" textAlign="center">
        تحصیلات
      </Typography>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          width: "100%",
        }}
      >
        {resumeData.education.map((e) => (
          <Stack>
            <Typography variant="h4">{e.title}</Typography>
            <Typography variant="body1">{e.description}</Typography>
            <Typography variant="body2">{e.time}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Education;
