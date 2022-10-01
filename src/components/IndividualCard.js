import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function IndividualCard(props) {
  const [readMore, setReadMore] = useState(false);
  const { content, description, title, url, urlToImage } = props.data;

  const handleReadButton = () => {
    setReadMore((prevValue) => !prevValue);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
          alt="green iguana"
        />
        {readMore ? (
          <CardContent>
            <Typography variant="body1" component="div">
              {title}
            </Typography>

            <Typography variant="body2" component="div" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        ) : (
          <CardContent>
            <Typography variant="body1" component="div">
              {title}
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              {title.length + description.length > 300
                ? description.substring(0, 300 - title.length) + "..."
                : description.substring(0, description.length)}
            </Typography>
          </CardContent>
        )}

        <CardActions>
          <Button size="small" onClick={() => handleReadButton()}>
            READ MORE
          </Button>
          <a
            href={url}
            className="underline-none"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="small">READ FULL PAGE</Button>
          </a>
        </CardActions>
      </Card>
    </>
  );
}

export default IndividualCard;
