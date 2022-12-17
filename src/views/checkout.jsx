import React from "react";
import { Container } from "react-bootstrap";
import { CheckOutForm } from "../components/cart/CheckOutForm";
import { Layout } from "../components/Layout";

export const Checkout = () => {
  return (
    <Layout>
      <Container>
        <div>checkout</div>
        <CheckOutForm />
      </Container>
    </Layout>
  );
};
