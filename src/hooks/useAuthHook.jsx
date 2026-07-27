import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const useAuthHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  let navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState({});
  const dispatch = useDispatch();

  const LoginFormHandler = (data) => {
    console.log(data);

    let user = JSON.parse(localStorage.getItem("user"));

    console.log(user);
    let foundUser = user.find(
      (item) => item.email === data.email && item.password === data.password,
    );
    console.log(foundUser);

    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;

      dispatch(login(userWithoutPassword));

      console.log("Login successful");
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

      setLoggedInUser(foundUser);
      navigate("/");
      toast.success("Login successful");
    } else {
      toast.error("Invalid email or password");
    }

    reset();
  };

  //   -------------------------------------------------------------------------------

  const [registeredUser, setRegisteredUser] = useState([]);

  const RegisterFormHandler = (data) => {
    console.log(data);

    let arr = [...registeredUser, data];

    localStorage.setItem("user", [JSON.stringify(arr)]);
    setRegisteredUser([...registeredUser, data]);

    reset();

    toast.success("Registration successful");
    navigate("/login");
  };

  return {
    LoginFormHandler,
    register,
    handleSubmit,
    errors,
    registeredUser,
    setRegisteredUser,
    RegisterFormHandler,
  };
};

export default useAuthHook;
