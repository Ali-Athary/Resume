import { Box, Chip, Stack, Typography } from "@mui/material";

const skillsData = [
  { title: "Java", value: 200 },
  { title: "React", value: 140 },
  { title: "C#", value: 100 },
  { title: "Python", value: 80 },
];

const ProgramingLanguages = () => {
  return (
    <Stack spacing={3} sx={{ direction: "rtl" }}>
      <Typography fontFamily="Arial" variant="h4" textAlign="center">
        زبان برنامه نویسی
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {skillsData.map((skill) => (
          <Chip
            label={skill.title}
            sx={{
              direction: "ltr",
              width: skill.value,
              color: "text.panelPrimary",
              borderColor: "text.tertiary",
              borderWidth: 1,
              borderStyle: "solid",
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default ProgramingLanguages;
