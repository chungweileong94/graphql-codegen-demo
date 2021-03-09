import {USER_LIST_SAMPLE, CAR_LIST_SAMPLE} from '../db/sample';

export const resolvers = {
  Query: {
    users: () => {
      return USER_LIST_SAMPLE;
    },
  },

  User: {
    cars: (obj: any) => {
      return CAR_LIST_SAMPLE.filter(car => car.userId === obj.id);
    },
  },
};
