import { ACCOUNT_LIST } from "./database.mjs";

export const accountQueryDAO = {
  retrieveAccountList() {
    const result = [];
    for (const account of ACCOUNT_LIST) {
      result.push({
        id: account.id,
        lastName: account.lastName,
        firstName: account.firstName,
      });
    }
    return result;
  },
  retrieveAccount(id) {
    for (const account of ACCOUNT_LIST) {
      if (account.id === id) {
        return {
          id: account.id,
          name: account.lastName + " " + account.firstName,
          creationDate: account.creationDate,
        };
      }
    }
    return null;
  },
};

