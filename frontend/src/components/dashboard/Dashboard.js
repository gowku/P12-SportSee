import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../container/Container";
import Top from "../top/Top";
import { getUserDataApi, getUserActivityApi, getUserSessionsApi, getUserPerformanceApi } from "../../Api/api";
// import { getAllUserData } from "../../Api/api";

function Dashboard() {
  const { id } = useParams();
  const userIsLoggedIn = localStorage.getItem("isLoggedIn");
  // console.log(userIsLoggedIn);

  const [userData, setUserData] = useState("");
  const [userActivity, setUserActivity] = useState("");
  const [userSessions, setUserSessions] = useState("");
  const [userPerformance, setUserPerformance] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      setUserData(await getUserDataApi(id));
    };
    getUserData();

    const getUserActivity = async () => {
      setUserActivity(await getUserActivityApi(id));
    };
    getUserActivity();

    const getUserSessions = async () => {
      setUserSessions(await getUserSessionsApi(id));
    };
    getUserSessions();

    const getUserPerformance = async () => {
      setUserPerformance(await getUserPerformanceApi(id));
    };
    getUserPerformance();
  }, []);

  console.log(userData);
  console.log(userActivity);
  console.log(userSessions);
  console.log(userPerformance);

  return (
    <main>
      {userIsLoggedIn ? (
        <>
          <Top />
          <Container />
        </>
      ) : (
        ""
      )}
    </main>
  );
}

export default Dashboard;

// import User from "../../class/user";

// useEffect(() => {
//   const user = new User(getUserData(id));
//   setUserData(user);
//   // setUserData(getUserData(id));
//   // setUserActivity(getUserActivity(id));
//   // setUserSessions(getUserSessions(id));
//   // setUserPerformance(getUserPerformance(id));
// }, []);

// console.log(userActivity);
// console.log(userSessions);
// console.log(userPerformance);
