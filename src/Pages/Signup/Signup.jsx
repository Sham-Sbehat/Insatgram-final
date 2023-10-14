import React from "react";
import Box from "@mui/material/Box";
//import { Link } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";
import  './Signup.modules.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import  { useState } from "react";
import joi from "joi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function OverlappingPhotosLayout() {
  let navigate=useNavigate();
  let[errorList,seterrorList]=useState([]);
  let [user,setUser]=useState({
    email:'',
    userName:'',
    password:''
  })
  function getUserData(e){
      let myUser=user;
      myUser[e.target.name]=e.target.value;
      setUser(myUser);
  }
  async function submitRegister(e){
      e.preventDefault(); 
      let resultValidation= validationRegisterUser(user);
      if(resultValidation.error){
        seterrorList(resultValidation.error.details)
      }else{
        let{data}=await axios.post("https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup",user);
        if(data.message==='success')
        navigate('/login');

      }
  }
  let schema=joi.object({
    name:joi.string().min(4).max(20).required(),
    age:joi.number().min(20).max(80).required(),
    email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password:joi.string().required().pattern(/^[A-Z][a-z]{3,8}$/).messages({
    "string.patern.base":"invalid  password pattern",
    "string.empty":"password is empty"
    }),
    cPassword:joi.valid(joi.ref('password')).required()

  })
  return schema.validate(user);
} 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src='images/Screen1.png'
            alt="Screen1"
            style={{
              
              width: "300px",
            height: "500px",
              position: "absolute",
              top: "50px",
              left: "250px",
              zIndex:"2"
            }}
          />

          <img
            src='images/Screen2.png'
            alt="Screen2"
            style={{ width: "200px", height: "400px", position: "absolute" ,top:"45px",  left: "220px" }} 
          />
        </div>

        

      </Box>
      <Box
        sx={{
          backgroundColor: "black", 
          marginTop:"45px",
          marginRight:"30px"

        }}
      >
        <Box
          sx={{
            backgroundColor: "#1D1D1D", 
            marginLeft: "0px",
            marginRight: "200px",
            marginTop: "15px",
            borderRadius: "10px",
            padding: "15px",
            width: "500px",
          }}
        >
          <img src='images/instagram_logo.png' alt="instagram" width={"150px"} style={{textAlign:"center", marginLeft:"155px"}} ></img>
          <p style={{marginLeft:"100px", textAlign:"center",width:"55%" ,color:"gray"}}>Sign up to see photos and videos
 from your friends </p>
 <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor:"#0095F6", color :"white"}}
            
            sx={{ mt: 3, mb: 2 }}
          >
            <FacebookIcon style={{marginRight:"3px"}}></FacebookIcon> Login with Facebook
          </Button>
          <p className='or'>Or</p>
          <form noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth

                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:"#0095F6", color :"white",fontWeight:"600"}}

              sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
          </form>
         

          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
            }}
          >
           <p style={{textAlign:"center",width:"70%", marginLeft:"80px" ,color :"grey"}}> By signing up, you agree to our Terms, Data
Policy and Cookies Police</p>
          </div>
        </Box>
        <div style={{
            backgroundColor: "#1D1D1D", 
            color:"gray",
            marginLeft: "0px",
            marginRight: "200px",
            marginTop: "15px",
            borderRadius: "10px",
            padding: "15px",
            width: "500px",
            textAlign:"center"
          }}>
           {/* <p > Have an account?  <a href="Components/Login/Login.jsx" style={{color:"#0095F6" , textDecoration:"none"}}>Log In</a></p> */}
            </div>
      </Box>
    </div>
  );
}