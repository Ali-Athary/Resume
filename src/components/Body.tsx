import { Box, Stack, Typography } from "@mui/material";
import resumeData from "../data/ali-resume.json";

const Body = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        pt: 30,
        px: 3,
      }}
    >
      <Stack
        direction="column"
        spacing={3}
        sx={{ width: "100%", direction: "rtl", textAlign: "justify" }}
      >
        <Stack spacing={1}>
          <Typography variant="h3">درباره من</Typography>
          <Typography>{resumeData.aboutMe}</Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="h3">تجربه های کاری</Typography>
          {resumeData.workExperiences.map((we) => (
            <Stack>
              <Typography variant="h4">{we.title}</Typography>
              {we.positions.map((p) => (
                <Stack>
                  <Typography variant="h4">{p.title}</Typography>
                  <Typography>{p.time}</Typography>
                </Stack>
              ))}
            </Stack>
          ))}
        </Stack>
        <Stack spacing={1}>
          <Typography variant="h3">سوابق تحصیلی</Typography>
          {resumeData.educaitionExperiences.map((e) => (
            <Stack>
              <Typography variant="h4">{e.title}</Typography>
              <Typography>{e.time}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Body;
