import React, { useEffect } from "react";
import Container from "../Componets/Container";
import SectionTitle from "../Componets/SectionTitle";
import { Navigate } from "react-router-dom";
import LogOut from "../Componets/LogOut";

const Profile = () => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      Navigate("/");
    }
  }, [token]);
  return (
    <Container>
      <SectionTitle title={"Profile Page"} />
      <LogOut className={"w-1/6"} />
    </Container>
  );
};

export default Profile;
