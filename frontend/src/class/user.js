// import { Component } from "react";

const witchDay = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};
const translatedKind = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

class UserDataFactory {
  constructor(data) {
    this.userInfo = {
      userId: data?.userData?.id,
      firstName: data?.userData?.userInfos?.firstName,
      lastName: data?.userData?.userInfos?.lastName,
      age: data?.userData?.userInfos?.age,
      // score: data?.userData?.todayScore * 100 || data?.userData?.score * 100,
    };
    this.score = {
      name: data?.userData?.userInfos?.firstName,
      value: data?.userData?.todayScore * 100 || data?.userData?.score * 100,
    };
    this.keyData = {
      calorie: data?.userData?.keyData?.calorieCount,
      glucide: data?.userData?.keyData?.carbohydrateCount,
      lipide: data?.userData?.keyData?.lipidCount,
      proteine: data?.userData?.keyData?.proteinCount,
    };

    this.userActivity = data?.userActivity?.sessions?.map((session, index) => ({
      day: index + 1,
      kilogramme: session.kilogram,
      calories: session.calories,
    }));
    this.sessionsMoyenne = data?.userSessions?.sessions?.map((session) => ({
      day: witchDay[session.day],
      dureeSession: session.sessionLength,
    }));
    this.performance = data?.userPerformance?.data?.map((element) => ({
      value: element.value,
      kind: translatedKind[element.kind],
    }));
    // console.log(this.userInfo);
    // console.log(this.keyData);
    // console.log(this.userActivity);
    // console.log(this.sessionsMoyenne);
    // console.log(this.performance);
  }
}
export default UserDataFactory;
