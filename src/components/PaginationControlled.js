import * as React from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled({ page, handleChange }) {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
      }}
      spacing={2}
    >
      <Pagination count={3} page={page} onChange={handleChange} />
    </Stack>
  );
}
