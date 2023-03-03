import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/mockedData';
import DataComputer from './DataComputer';

const getApiUserData = async (userId) => {
  const data = await fetch(`http://localhost:3000/user/${userId}`)
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.log(err));

  return data;
};

const getApiUserActivity = async (userId) => {
  const data = await fetch(`http://localhost:3000/user/${userId}/activity`)
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.log(err));

  return data;
};

const getApiUserSessions = async (userId) => {
  const data = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.log(err));

  return data;
};

const getApiUserPerformance = async (userId) => {
  const data = await fetch(`http://localhost:3000/user/${userId}/performance`)
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.log(err));

  return data;
};

export const getComputedUserData = async (isMockedData, userId) => {
  const rawData = isMockedData
    ? {
        userMainData: USER_MAIN_DATA.find((data) => data.id === userId),
        userActivity: USER_ACTIVITY.find((data) => data.userId === userId),
        userAverageSessions: USER_AVERAGE_SESSIONS.find((data) => data.userId === userId),
        userPerformance: USER_PERFORMANCE.find((data) => data.userId === userId),
      }
    : {
        userMainData: await getApiUserData(userId),
        userActivity: await getApiUserActivity(userId),
        userAverageSessions: await getApiUserSessions(userId),
        userPerformance: await getApiUserPerformance(userId),
      };

  const computer = new DataComputer(rawData);

  return computer.computedData;
};
