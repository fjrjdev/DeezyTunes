import React from "react";
import { Container } from "@mui/material";
import ResposiveAppBar from "../../components/ResposiveAppBar";
import CartList from "../../components/CartList";
import BottomBar from "../../components/BottomBar";

const Cart = () => {
  return (
    <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
      <ResposiveAppBar />
      <CartList />
      <BottomBar />
    </Container>
  );
};

export default Cart;
