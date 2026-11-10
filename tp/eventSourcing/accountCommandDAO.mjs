import { ACCOUNT_LIST } from "./database.mjs";

export const accountCommandDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Contenu de la BDD :", ACCOUNT_LIST);
    return account;
  },
  retrieveAccount(id) {
    for (const account of ACCOUNT_LIST) {
      if (account.id === id) {
        return account;
      }
    }
    return null;
  },
  updateAccount(account) {
    for (let i = 0; i < ACCOUNT_LIST.length; i++) {
      if (ACCOUNT_LIST[i].id === account.id) {
        ACCOUNT_LIST[i] = account;
      }
    }
    console.log("Contenu de la BDD :", ACCOUNT_LIST);
    return account;
  },
};
