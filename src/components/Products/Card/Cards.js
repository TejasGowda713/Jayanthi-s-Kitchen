import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 170,
    width: 250,
    objectFit: "cover",
  },
});

export default function Cards({ img, title }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
