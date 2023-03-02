import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/mockedData';
import DataComputer from './DataComputer';

export const getComputedUserData = (isMockedData, userId) => {
  const rawData = isMockedData
    ? {
        userMainData: USER_MAIN_DATA.find((data) => data.id === userId),
        userActivity: USER_ACTIVITY.find((data) => data.userId === userId),
        userAverageSessions: USER_AVERAGE_SESSIONS.find((data) => data.userId === userId),
        userPerformance: USER_PERFORMANCE.find((data) => data.userId === userId),
      }
    : null;

  const computer = new DataComputer(rawData);

  return computer.computedData;
};
