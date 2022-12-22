import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Navbar from "../Pages/Landing/Navbar";
import Footer from "../Pages/Landing/Footer"

const PaymentSuccess = () => {
  return (
      <div>
          <Navbar />
    <Box>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="400px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Order Placed!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for shopping with us!
        </AlertDescription>
      </Alert>
    </Box>
    <Footer />
    </div>
  );
};

export default PaymentSuccess;
