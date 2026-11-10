import { Account } from "./account.mjs";
import { accountDAO } from "./accountDAO.mjs";

export const accountService = {
  addAccount(lastName, firstName) {
    const account = new Account(undefined, lastName, firstName);
    return accountDAO.insertAccount(account);
  },
  getAccountList() {return accountDAO.retrieveAccountList();},
  
  saveAccount(id, lastName, firstName) {
    const account = accountDAO.retrieveAccount(id);
    if (account === null) {
      console.log("Compte introuvable :", id);
      return null;
    }
    const updatedAccount = new Account(account.id, lastName, firstName, account.creationDate);
    return accountDAO.updateAccount(updatedAccount);
  },
  getAccount(id) {return accountDAO.retrieveAccount(id);},
};
