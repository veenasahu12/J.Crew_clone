import React from "react";
import {
  Stack,
  HStack,
  VStack,
  Text,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";
import styles from "./Checkout.module.css";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import Navbar from "../Pages/Landing/Navbar";
import Footer from "../Pages/Landing/Footer"

const Checkout = () => {
  const navigate = useNavigate();

  const handleProceedPayment = () => {
    setTimeout(() => {
      navigate("/paymentsuccess");
    }, 2000);
  };

  return (
    <div>
        <Navbar />
    <div className={styles.mainBox_any}>
      <VStack padding="2%" spacing="3%">
        <Box w="90%">
          <Text
            fontSize="small"
            fontWeight="bold"
            color="blackAlpha.700"
            fontStyle="system-ui"
          >
            Express Checkout
          </Text>

          <HStack
            border="1.2px solid gray"
            borderRadius="5px"
            padding="3% 5% 3% 5%"
            marginTop="2%"
          >
            <Button w="33%" bg="#5D2CF6" color="white">
              Shop Pay
            </Button>

            <Button w="33%" bg="#F79C34">
              Amazon Pay
            </Button>

            <Button w="33%" bg="black" color="white">
              G Pay
            </Button>
          </HStack>
        </Box>

        <HStack>
          <Text color="blackAlpha.700" fontSize="sm">
            OR
          </Text>
        </HStack>

        <Stack w="90%" spacing="2%">
          <HStack justifyContent="space-between">
            <Box>
              <Text fontSize="lg">Contact Information</Text>
            </Box>
            <HStack>
              <Text color="blackAlpha.700">Already have an account :</Text>
              <RouterLink color="blackAlpha.700" to="/Login">
                Login
              </RouterLink>
            </HStack>
          </HStack>

          <Input
            className={styles.input}
            focusBorderColor="#0D362B"
            placeholder="Enter Email or Mobile number"
          />

          <Text fontSize="lg">Shipping Address</Text>

          <Input
            className={styles.input}
            focusBorderColor="#0D362B"
            placeholder="Country"
          />

          <HStack>
            <Input
              className={styles.input}
              focusBorderColor="#0D362B"
              placeholder="First Name"
            />
            <Input
              className={styles.input}
              focusBorderColor="#0D362B"
              placeholder="Last Name"
            />
          </HStack>

          <Input
            className={styles.input}
            focusBorderColor="#0D362B"
            placeholder="Address"
          />

          <Input
            className={styles.input}
            focusBorderColor="#0D362B"
            placeholder="Appartment"
          />

          <HStack>
            <Input
              className={styles.input}
              focusBorderColor="#0D362B"
              placeholder="City"
            />
            <Input
              className={styles.input}
              focusBorderColor="#0D362B"
              placeholder="State"
            />
            <Input
              className={styles.input}
              focusBorderColor="#0D362B"
              type="number"
              placeholder="Zip Code"
            />
          </HStack>

          <Input
            className={styles.input}
            focusBorderColor="#0D362B"
            type="number"
            placeholder="Phone Number"
          />

          <Button bg="#0D362B" color="white" onClick={handleProceedPayment}>
            Proceed to Payment
          </Button>
        </Stack>
      </VStack>
    </div>
    <Footer />
    </div>
  );
};

export default Checkout;
