import { Button, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormProvider, FTextField } from "../components/form";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";



function LoginPage() {
  let auth = useAuth();
  const defaultValue = {
    username: "Janice Nguyen",
    password: "Midori and Janice",
  };
  const methods = useForm({ defaultValue });
  const {
    reset,
    setError,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;
  const onSubmit =  async (data) => {
    console.log(data, " data");
    setError.apply("afterSubmit", { message: "Server response error" });
    auth.loginModalUser(defaultValue.username,()=>{
      navigate(-1);
    })
  }
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };


  return (
    <div className='login-container-styled-background'>
    <div className="login-container">
  
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
      <Stack spacing={3} sx={{ minWidth: "350px" }} className="login-form">
      <h1>Unlimited movies, TV shows, and more</h1>
      <h2>Ready to watch? Login with the available account already filled for you</h2>
        <Typography variant="h4" textAlign="center" id="login-title">
          Login
        </Typography>
        <FTextField
              name="username"
              label="Username"
              className="username-input"
              value={defaultValue.username}
            ></FTextField>
        <FTextField
              className="password-input"
              name="password"
              label="Password"
              value={defaultValue.password}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff/> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></FTextField>
        <Button type="submit" variant="contained" className="button-red sign-in-button">
          Login
        </Button>
      </Stack>
    </FormProvider>
    </div>
    </div>
  );
}

export default LoginPage;
