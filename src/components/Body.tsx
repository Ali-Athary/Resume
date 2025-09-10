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
          <Typography variant="h2">درباره من</Typography>
          <Typography sx={{ pr: 1 }}>{resumeData.aboutMe}</Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="h2">تجربه های کاری</Typography>
          {resumeData.workExperiences.map((we) => (
            <Stack sx={{ pr: 1 }}>
              <Typography variant="h3">{we.title}</Typography>
              {we.positions.map((p) => (
                <Stack direction="row">
                  <Stack alignItems="center" sx={{ mt: 1.2, ml: 1 }}>
                    <Box
                      sx={{
                        width: 7,
                        height: 7,
                        borderRadius: 20,
                        bgcolor: "text.secondary",
                      }}
                    />
                    <Box
                      sx={{
                        width: 2,
                        my: 1,
                        flex: 1,
                        bgcolor: "text.tertiary",
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Stack direction="row" alignItems="center">
                      <Typography variant="h4">{p.title}</Typography>
                    </Stack>
                    <Typography variant="subtitle1" color="text.secondary">
                      {p.time}
                    </Typography>
                    <Typography>{p.description}</Typography>
                  </Stack>
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
