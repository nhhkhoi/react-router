import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { red, orange } from "@mui/material/colors";

const RedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));
const OrangeButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[700],
  },
}));

export default function JobCards({ job }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent sx={{ paddingTop: 2, paddingBottom: 0 }}>
        <Typography component="div">{job.title}</Typography>
      </CardContent>
      <CardContent sx={{ margin: 0.5, padding: 0.5 }}>
        {job.skills.slice(0, 4).map((jobcard) => (
          <RedButton
            sx={{ borderRadius: 2, padding: 0.5, margin: 0.5, fontSize: 8 }}
            component="span"
          >
            {jobcard}
          </RedButton>
        ))}
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {job.description}
        </Typography>
      </CardContent>
      <CardContent sx={{ margin: 0.5, padding: 0.5 }}>
        <OrangeButton sx={{ padding: 1, marginBottom: 1, marginTop: 1 }}>
          Learn More
        </OrangeButton>
      </CardContent>
    </Card>
  );
}
