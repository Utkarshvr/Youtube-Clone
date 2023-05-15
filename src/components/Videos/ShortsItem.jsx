import { Stack, Skeleton, Typography } from "@mui/material";
import { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const ShortItemInSkeletonView = () => (
  <Stack minWidth="160px" maxWidth="240px" spacing={1}>
    <Skeleton variant="rectangular" width="100%" height={280} />
    <Stack width="100%">
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width="40%" />
    </Stack>
  </Stack>
);

export default function ShortsItem({ short }) {
  const {
    snippet: { title, thumbnails },
    id: { videoId },
  } = short;

  const [inView, setInView] = useState(false);
  const ref = useRef();

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
        console.log(entry);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return inView ? (
    <Link to={`/video/${videoId}`}>
      <Stack
        alignItems="center"
        minWidth="180px"
        maxWidth="180px"
        height="300px"
        spacing={1}
      >
        <img
          style={{
            background: "#333",
            borderRadius: 15,
            objectFit: "cover",
          }}
          width="100%"
          height="100%"
          src={thumbnails.medium.url}
          alt="Short"
        />
        <Stack>
          <Typography lineHeight={1.2}>
            {title.length <= 30 ? title : title.slice(0, 30) + "..."}
          </Typography>
          <Typography color="gray">646k Views</Typography>
        </Stack>
      </Stack>
    </Link>
  ) : (
    <div ref={ref}>
      <ShortItemInSkeletonView />
    </div>
  );
}
