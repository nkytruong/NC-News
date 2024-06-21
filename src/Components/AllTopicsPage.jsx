import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function AllTopicsPage({ topics }) {
  return (
    <div>
      <h1>All Topics</h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          typography: "body1",
          "& > :not(style) ~ :not(style)": {
            ml: 2,
          },
        }}
      >
        {topics.map((topic) => {
          return (
            <Link href={`/topics/${topic.slug}`} underline="none">
              {topic.slug}
            </Link>
          );
        })}
      </Box>
    </div>
  );
}

export default AllTopicsPage;
