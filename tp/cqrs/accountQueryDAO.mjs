import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";

export const accountQueryDAO = {
  retrieveAccountList() {
    return queryDatabase.accountSummaryList;
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

