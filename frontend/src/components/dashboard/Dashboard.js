import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../container/Container";
import Top from "../top/Top";
import { getUserDataApi, getUserActivityApi, getUserSessionsApi, getUserPerformanceApi } from "../../Api/api";
import UserDataFactory from "../../class/user";

function Dashboard() {
  const { id } = useParams();
  const userIsLoggedIn = localStorage.getItem("isLoggedIn");
  // console.log(userIsLoggedIn);

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState("");
  const [userActivity, setUserActivity] = useState("");
  const [userSessions, setUserSessions] = useState("");
  const [userPerformance, setUserPerformance] = useState("");
  const [allUserDataFormated, setAllUserDataFormated] = useState({});

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
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setAllUserDataFormated(new UserDataFactory({ userData, userActivity, userSessions, userPerformance }));
    }
  }, [userData, userActivity, userSessions, userPerformance]);

  console.log(allUserDataFormated);

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
