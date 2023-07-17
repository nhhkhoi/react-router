import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DetailModal from "./DetailModal";

export default function JobCards({ job }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        WebkitBoxShadow: "3px 12px 15px 0px rgba(9,9,8,0.31)",
        BoxShadow: "3px 12px 15px 0px rgba(9,9,8,0.31)",
        backgroundColor: "#2f3640",
      }}
    >
      <CardContent sx={{}}>
        <Typography component="div" sx={{ fontWeight: "bold" }}>
          {job.name}
          <hr />
        </Typography>
      </CardContent>
      <CardContent sx={{ alignSelf: "flex-start" }}>
        <Typography>Job Number: {job.numOfJobs} </Typography>
        <Typography>Job Rating: {job.numOfRatings} </Typography>
      </CardContent>

      <CardContent
        sx={{
          width: "100%",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: "3",
          WebkitBoxOrient: "vertical",
          paddingBottom: 0,
        }}
      >
        Job Detail: {job.description}
      </CardContent>

      <CardContent sx={{ margin: 0.5, padding: 0.5 }}>
        <DetailModal name={job.name} benefits={job.benefits} />
      </CardContent>
    </Card>
  );
}
