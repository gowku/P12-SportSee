import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../container/Container";
import Top from "../top/Top";
import { getUserDataApi, getUserActivityApi, getUserSessionsApi, getUserPerformanceApi } from "../../Api/api";
import UserDataFactory from "../../class/user";
import dataMocked from "../../Api/data";

function Dashboard() {
  const { id } = useParams();
  const userIsLoggedIn = localStorage.getItem("isLoggedIn");
  // console.log(userIsLoggedIn);

  const useMockedData = localStorage.getItem("useMockedData");
  const user = localStorage.getItem("userId");

  // console.log(dataMocked);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState("");
  const [userActivity, setUserActivity] = useState("");
  const [userSessions, setUserSessions] = useState("");
  const [userPerformance, setUserPerformance] = useState("");
  const [allUserDataFormated, setAllUserDataFormated] = useState({});
  // console.log(useMockedData);
  useEffect(() => {
    if (useMockedData === "true") {
      if (user === "12") {
        setUserData(dataMocked.USER_MAIN_DATA[0]);
        setUserActivity(dataMocked.USER_ACTIVITY[0]);
        setUserSessions(dataMocked.USER_AVERAGE_SESSIONS[0]);
        setUserPerformance(dataMocked.USER_PERFORMANCE[0]);
      } else if (user === "18") {
        setUserData(dataMocked.USER_MAIN_DATA[1]);
        setUserActivity(dataMocked.USER_ACTIVITY[1]);
        setUserSessions(dataMocked.USER_AVERAGE_SESSIONS[1]);
        setUserPerformance(dataMocked.USER_PERFORMANCE[1]);
      }
      console.log("on utilise les données mocké");
    } else {
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
      console.log("on utilise les donées de l'api");
    }
    setIsLoading(false);
  }, []);
  // console.log(userData);

  useEffect(() => {
    if (!isLoading) {
      setAllUserDataFormated(new UserDataFactory({ userData, userActivity, userSessions, userPerformance }));
    }
  }, [userData, userActivity, userSessions, userPerformance]);

  // console.log(userData);
  // console.log(userActivity);
  // console.log(userSessions);
  // console.log(userPerformance);
  // console.log(allUserData);
  return (
    <main>
      {userIsLoggedIn && !isLoading ? (
        <>
          <Top name={allUserDataFormated?.userInfo?.firstName} />
          <Container
            keyData={allUserDataFormated?.keyData}
            activity={allUserDataFormated?.userActivity}
            sessions={allUserDataFormated?.sessionsMoyenne}
            performance={allUserDataFormated?.performance}
            // score={allUserDataFormated?.userInfo?.score}
            score={allUserDataFormated?.score}
          />
        </>
      ) : (
        ""
      )}
    </main>
  );
}

export default Dashboard;
