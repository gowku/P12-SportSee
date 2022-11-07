import axios from "axios";

const baseUrl = "http://localhost:3000/user/";

const getUserDataApi = async (id) => {
  try {
    const { data: response } = await axios({
      method: "get",
      url: `${baseUrl}${id}`,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserActivityApi = async (id) => {
  try {
    const { data: response } = await axios({
      method: "get",
      url: `${baseUrl}${id}/activity`,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const getUserSessionsApi = async (id) => {
  try {
    const { data: response } = await axios({
      method: "get",
      url: `${baseUrl}${id}/average-sessions`,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const getUserPerformanceApi = async (id) => {
  try {
    const { data: response } = await axios({
      method: "get",
      url: `${baseUrl}${id}/performance`,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getUserDataApi, getUserActivityApi, getUserSessionsApi, getUserPerformanceApi };

// const endPoints = (id) => [`${baseUrl}${id}`, `${baseUrl}${id}/average-sessions`, `${baseUrl}${id}/performance`, `${baseUrl}${id}/activity`];

// export const getAllUserData = (id) => {
//   axios.all(endPoints(id).map((endPoint) => axios.get(endPoint)));
//   try {
//     axios.spread(({ data: userData }, { data: userSession }, { data: userPerformance }, { data: userActivity }) => {
//       console.log(userData);
//       return userData.data;
//     });
//     // console.log(userData);
//     // const AllUserData = { userData, userSession, userPerformance, userActivity };
//   } catch (error) {
//     console.log(error);
//   }
// };
// getAllUserData(12);
