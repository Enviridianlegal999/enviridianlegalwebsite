import Image from "next/image";

import { Box, Grid, IconButton, Stack } from "@mui/material";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";

const BlogPreviewCard = ({ blogCover, blogAlt, blogTitle, styles }) => {
  return (
    <Grid
      size={{ xs: 12, sm: 6, lg: 3 }}
      className={styles.blogCard}
      position={"relative"}
      px={2}
    >
      <Box
        sx={{
          height: "150px",
          width: "100%",
          position: "relative",
          borderRadius: "var(--high-rounded)",
          overflow: "hidden",
        }}
      >
        <Image
          src={blogCover}
          alt={blogAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          height: "fit-content",
          width: "100%",
          position: "absolute",
          bottom: 0,
          padding: "20px",
          display: "flex",
          left: 0,
          bottom: 0,
        }}
      >
        <Stack spacing={1} alignItems={"flex-start"}>
          <span className={styles.blogTitle}>{blogTitle}</span>
          <IconButton
            size="medium"
            //   onClick={handleMenu}
          >
            <NorthEastRoundedIcon
              fontSize="large"
              sx={{ color: "var(--secondary)" }}
            />
          </IconButton>
        </Stack>
      </Box>
    </Grid>
  );
};

export default BlogPreviewCard;
