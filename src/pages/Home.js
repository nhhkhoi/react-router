import React from "react";
import SearchAppBar from "../components/SeachAppBar";
import { Container, CssBaseline } from "@mui/material";
import JobCards from "../components/JobCards";
import PaginationControlled from "../components/PaginationControlled";
import Jobs from "../jobs.json";
import { useAuth } from "../context/AuthContext";

function Home() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const beginning = 5 * (page - 1);
  const end = 5 * page;

  const { searchParams } = useAuth();

  return (
    <div>
      <SearchAppBar />
      <Container
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Jobs.companies
          .filter((job) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = job.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .slice(beginning, end)

          .map((job) => (
            <JobCards key={job.id} job={job} />
          ))}
      </Container>
      <PaginationControlled page={page} handleChange={handleChange} />
      <CssBaseline />
    </div>
  );
}

export default Home;
