import React from "react";
import "./styles.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cart";

export default function ItemCard(props) {
  const { data } = props;
  const { title, price } = data;
  const dispatch = useDispatch();
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
        <Button size="small" onClick={() => dispatch(addItem(data))}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
