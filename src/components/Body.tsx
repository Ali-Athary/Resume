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
        spacing={2}
        sx={{ width: "100%", direction: "rtl", textAlign: "justify" }}
      >
        <Stack>
          <Typography variant="h4">درباره من</Typography>
          <Typography>{resumeData.aboutMe}</Typography>
        </Stack>
        <Stack>
          <Typography variant="h4">تجربه های کاری</Typography>
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
      </Stack>
    </Box>
  );
};

export default Body;
