/**
 * Creates a new data computer instance.
 * @class
 */
export default class DataComputer {
  /**
   * The data to compute.
   * @protected
   * @type {object}
   */
  #data;

  /**
   * Assign the data to the instance.
   * @constructor
   * @param {object} data - The data to compute.
   */
  constructor(data) {
    this.#data = data;
  }

  /**
   * Get all the computed data.
   * @function computedData
   *
   * @returns {object} The computed data.
   */
  get computedData() {
    return {
      userMainData: this.#computeUserMainData(this.#data.userMainData),
      userActivity: this.#computeUserActivity(this.#data.userActivity),
      userAverageSessions: this.#computeUserAverageSessions(this.#data.userAverageSessions),
      userPerformance: this.#computeUserPerformance(this.#data.userPerformance),
    };
  }

  /**
   * Compute the user main data.
   * @function #computeUserMainData
   * @protected
   * @param {object} data - The raw user main data.
   *
   * @returns {object} The computed user main data.
   */
  #computeUserMainData(data) {
    return {
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
  }

  /**
   * Compute the user activities data.
   * @function #computeUserActivity
   * @protected
   * @param {object} data - The raw user activities data.
   *
   * @returns {object} The computed user activities data.
   */
  #computeUserActivity(data) {
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
  }

  /**
   * Compute the user sessions data.
   * @function #computeUserAverageSessions
   * @protected
   * @param {object} data - The raw user sessions data.
   *
   * @returns  {object} The computed user sessions data.
   */
  #computeUserAverageSessions(data) {
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
  }

  /**
   * Compute the user performance data.
   * @function #computeUserPerformance
   * @protected
   * @param {object} data - The raw user performance data.
   *
   * @returns {object} The computed user performance data.
   */
  #computeUserPerformance(data) {
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
  }
}
