import React from "react";
import "./styles.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cart";
import { useSelector } from "react-redux";

export default function ItemCard(props) {
  const { data } = props;
  const { title, price } = data;
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  function getPrice() {
    const count = cartItems.reduce((a, b) => {
      if (b.id === data.id) {
        return a + 1;
      } else {
        return a;
      }
    }, 0);
    return count > 0 ? `${price} * ${count}` : price;
  }

  return (
    <Card sx={{ width: "20vh", margin: "1vh", height: "20vh" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {getPrice()}
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
