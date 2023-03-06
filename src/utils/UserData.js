import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/mockedData';
import DataComputer from './DataComputer';

/**
 * Fetch the user main data from the backend API.
 * @function getApiUserData
 * @param {number} userId - The user ID.
 * 
 * @returns {object} The raw (uncomputed) user main data.
 */
const getApiUserData = async (userId) => {
  const data = await fetch(`http://localhost:3000/user/${userId}`)
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.log(err));

  return data;
};

/**
 * Fetch the user activities data from the backend API.
 * @function getApiUserActivity
 * @param {number} userId - The user ID.
 * 
 * @returns  {object} The raw (uncomputed) user acitivies data.
 */
const getApiUserActivity = async (userId) => {
  const data = await fetch(`http://localhost:3000/user/${userId}/activity`)
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.log(err));

  return data;
};

/**
 * Fetch the user sessions data from the backend API.
 * @function getApiUserSessions
 * @param {number} userId - The user ID.
 * 
 * @returns {object} The raw (uncomputed) user sessions data.
 */
const getApiUserSessions = async (userId) => {
  const data = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.log(err));

  return data;
};

/**
 * Fetch the user perfomance data from the backend API.
 * @function getApiUserPerformance
 * @param {number} userId - The user ID.
 * 
 * @returns {object} The raw (uncomputed) user performance data.
 */
const getApiUserPerformance = async (userId) => {
  const data = await fetch(`http://localhost:3000/user/${userId}/performance`)
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.log(err));

  return data;
};

/**
 * Get all the user datas from the API or the mock and compute them.
 * @function getComputedUserData
 * @param {boolean} isMockedData - Tells if the mocked data should be used.
 * @param {number} userId - The user ID.
 * 
 * @returns {object} The complete computed user data.
 */
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
