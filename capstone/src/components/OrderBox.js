//file: src/components/OrderBox.js

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup'
import styled from "styled-components";
import * as MUI from '@mui/material'
import API, { graphqlOperation } from "@aws-amplify/api";
import * as gql from "../graphql/mutations"

const OrderBox = styled.div`
    height: 600px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    color: #333333;

    .MUI.FormControl{
      width: 80%
    }
`

const initialValues = {
  name: "",
  email: "",
  color_1: "Red",
  quantity_1: "",
  color_2: "Blue",
  quantity_2: "",
  color_3: "White",  
  quantity_3: ""
}

const validationSchema = 
  Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email()
  });


const OrderForm = () => (
  // pass order details in JSON and add order to databse
  function addOrderToDB(orderDetails){

  }
  // send order to orderAPI and log it in table
  function sendOrderMQTT(orderDetails){

  }

  <OrderBox>
    <div className="app">

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}

        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          //alert(JSON.stringify(values, null, 2));

          //Set up for Orders to be added to the database
          //*id needs an incremented value still*
          //*OrderId needs an incremented / randomized value still*
          //*Transaction ID will need an ID from payment system
          //*For some reason this created a _typename field in database
          //*Message me to work on more - JH
          var orderDetails = {
            id : "4",
            OrderID: 4,
            Color: values.color_1,
            Email: values.email,
            Name: values.name,
            OrderStatus: "Created",
            Quantity: values.quantity_1,
            TransactionID: 9999999,

          };


          //Add order to database
          await API.graphql(graphqlOperation(gql.createOrder, { input: orderDetails }));

          alert(JSON.stringify(orderDetails, null, 2));

        }}
        enableReinitialize
      >
        
        {({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          }) => (

                <Form autoComplete="off" onSubmit={handleSubmit}>
                  <MUI.Typography variant="h3" component="h3" align='center'>
                    Order Form
                  </MUI.Typography>

                  <MUI.FormControl sx={{m: 2, minWidth: 450}}>
                  <MUI.TextField
                      id="name"
                      placeholder="Enter your name"
                      label="Name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      required="true"
                      className={
                          errors.name && touched.name
                          ? "text-input error"
                          : "text-input"
                      }
                  /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 2, minWidth: 450}}>
                  <MUI.TextField
                      id="email"
                      placeholder="Enter your email"
                      label="Email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      required="true"
                      className={
                          errors.email && touched.email
                          ? "text-input error"
                          : "text-input"
                      }
                  />
                  {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                  )}
                  </MUI.FormControl>
                  
                  <MUI.FormControl sx={{m: 1.45, minWidth: 180}}>
                    <MUI.TextField
                        id="color_1"
                        name="color_1"
                        placeholder="Red"
                        type="text"
                        value={values.color_1}
                        disabled="true"
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 1.45, minWidth: 210}}>
                    <MUI.InputLabel id="quantity-select-label">Quantity</MUI.InputLabel>
                    <MUI.Select
                        id="quantity_1"
                        name="quantity_1"
                        labelId="quantity-select-label"
                        type="select"
                        value={values.quantity_1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required="true"
                    >
                        <MUI.MenuItem value={0}>0</MUI.MenuItem> 
                        <MUI.MenuItem value={1}>1</MUI.MenuItem>
                        <MUI.MenuItem value={2}>2</MUI.MenuItem>
                        <MUI.MenuItem value={3}>3</MUI.MenuItem>
                    </MUI.Select>
                  </MUI.FormControl>

                  <MUI.FormControl sx={{m: 1.45, minWidth: 180}}>
                    <MUI.TextField
                        id="color_2"
                        name="color_2"
                        placeholder="Blue"
                        type="text"
                        value={values.color_2}
                        disabled="true"
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 2, minWidth: 210}}>
                    <MUI.InputLabel id="quantity-select-label">Quantity</MUI.InputLabel>
                    <MUI.Select
                        id="quantity_2"
                        name="quantity_2"
                        labelId="quantity-select-label"
                        type="select"
                        value={values.quantity_2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required="true"
                    >
                        <MUI.MenuItem value={0}>0</MUI.MenuItem> 
                        <MUI.MenuItem value={1}>1</MUI.MenuItem>
                        <MUI.MenuItem value={2}>2</MUI.MenuItem>
                        <MUI.MenuItem value={3}>3</MUI.MenuItem>
                    </MUI.Select>
                  </MUI.FormControl>

                  <MUI.FormControl sx={{m: 1.45, minWidth: 180}}>
                    <MUI.TextField
                        id="color_3"
                        name="color_3"
                        placeholder="White"
                        type="text"
                        value={values.color_3}
                        disabled="true"
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 2, minWidth: 210}}>
                    <MUI.InputLabel id="quantity-select-label">Quantity</MUI.InputLabel>
                    <MUI.Select
                        id="quantity_3"
                        name="quantity_3"
                        labelId="quantity-select-label"
                        type="select"
                        value={values.quantity_3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required="true"
                    >
                        <MUI.MenuItem value={0}>0</MUI.MenuItem> 
                        <MUI.MenuItem value={1}>1</MUI.MenuItem>
                        <MUI.MenuItem value={2}>2</MUI.MenuItem>
                        <MUI.MenuItem value={3}>3</MUI.MenuItem>
                    </MUI.Select>
                  </MUI.FormControl>

              <MUI.FormControl sx={{m: 2, minWidth: 210}}>
                <MUI.Button
                  variant="contained"
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </MUI.Button>
              </MUI.FormControl>

              <MUI.FormControl sx={{m: 2, minWidth: 210}}>
                <MUI.Button 
                  type="submit" 
                  variant="contained"
                  disabled={isSubmitting}>
                  Submit
                </MUI.Button>
              </MUI.FormControl>

            </Form>
          )}
      </Formik>
    </div>
  </OrderBox>
);

export default OrderForm