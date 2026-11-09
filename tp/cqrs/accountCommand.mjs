import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";

export const accountCommand = {
  addAccount(lastName, firstName) {
    const account = new Account(undefined, lastName, firstName);
    return accountCommandDAO.insertAccount(account);
  },
  saveAccount(id, lastName, firstName) {
    const existing = accountCommandDAO.retrieveAccount(id);
    if (existing === null) {
      console.log("Compte introuvable :", id);
      return null;
    }
    const account = new Account(existing.id, lastName, firstName, existing.creationDate);
    return accountCommandDAO.updateAccount(account);
  },
};
