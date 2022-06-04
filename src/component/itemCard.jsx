import React from "react";
import "./styles.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export default function ItemCard(props) {
  const { data } = props;
  const { title, price } = data;
  return (
    <Card sx={{ width: "20vh", margin: "1vh", height: "20vh" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {price}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom></Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {}}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
