export default class DataComputer {
  static computeUserMainData = (data) => {
    const computedData = {
      userId: data.id,
      userInfos: data.userInfos,
      todayScore: { score: data.todayScore, percentage: `${Math.round(data.todayScore * 100)}%` },
      nutritionals: {
        calories: {
          label: 'Calories',
          value: data.keyData.calorieCount,
          unit: 'kCal',
        },
        proteins: {
          label: 'Proteines',
          value: data.keyData.proteinCount,
          unit: 'g',
        },
        carbohydrates: {
          label: 'Glucides',
          value: data.keyData.carbohydrateCount,
          unit: 'g',
        },
        lipids: {
          label: 'Lipides',
          value: data.keyData.lipidCount,
          unit: 'g',
        },
      },
    };

    return computedData;
  };

  static computeUserActivity = (data) => {
    const computedData = {
      userId: data.userId,
      sessions: [],
    };

    data.sessions.forEach((session) => {
      const computedSession = {
        day: parseInt(session.day.split('-')[2]),
        kg: session.kilogram,
        calories: session.calories,
      };

      computedData.sessions.push(computedSession);
    });

    return computedData;
  };

  static computeUserAverageSessions = (data) => {
    const computedData = {
      userId: data.userId,
      sessions: [],
    };

    data.sessions.forEach((session) => {
      const computedSession = {
        sessionLength: session.sessionLength,
      };

      switch (session.day) {
        case 1:
          computedSession.day = 'L';
          break;
        case 2:
          computedSession.day = 'M';
          break;
        case 3:
          computedSession.day = 'M';
          break;
        case 4:
          computedSession.day = 'J';
          break;
        case 5:
          computedSession.day = 'V';
          break;
        case 6:
          computedSession.day = 'S';
          break;
        case 7:
          computedSession.day = 'D';
          break;
        default:
          break;
      }

      computedData.sessions.push(computedSession);
    });

    return computedData;
  };

  static computeUserPerformance = (data) => {
    const computedData = {
      userId: data.userId,
      kind: {
        1: 'Cardio',
        2: 'Energie',
        3: 'Endurance',
        4: 'Force',
        5: 'Vitesse',
        6: 'Intensité',
      },
      data: [],
    };

    for (let i = data.data.length - 1; i >= 0; i--) {
      computedData.data.push(data.data[i]);
    }

    return computedData;
  };
}
