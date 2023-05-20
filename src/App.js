import PaginationControlled from "./components/PaginationControlled";
import React from "react";
import JobCards from "./components/JobCards";
import SearchAppBar from "./components/SeachAppBar";
import Jobs from "./jobs.json";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";

function App() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const beginning = 5 * (page - 1);
  const end = 5 * page;
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
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
          {Jobs.companies.slice(beginning, end).map((job) => (
            <JobCards key={job.id} job={job} />
          ))}
        </Container>
        <PaginationControlled page={page} handleChange={handleChange} />
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
