import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountCommand = {
  addAccount(lastName, firstName) {
    const account = new Account(undefined, lastName, firstName);
    accountCommandDAO.insertAccount(account);

    queryDatabase.accountSummaryList.push({
      id: account.id,
      lastName: account.lastName,
      firstName: account.firstName,
    });
    console.log("Contenu de la queryDatabase :", queryDatabase.accountSummaryList);
    accountCache[account.id] = {
      id: account.id,
      name: account.lastName + " " + account.firstName,
      creationDate: account.creationDate,
    };
    console.log("Contenu du cache :", accountCache);

    return account;
  },
  saveAccount(id, lastName, firstName) {
    const existing = accountCommandDAO.retrieveAccount(id);
    if (existing === null) {
      console.log("Compte introuvable :", id);
      return null;
    }
    const account = new Account(existing.id, lastName, firstName, existing.creationDate);
   
    accountCommandDAO.updateAccount(account);
    for (const summary of queryDatabase.accountSummaryList) {
      if (summary.id === account.id) {
        summary.lastName = account.lastName;
        summary.firstName = account.firstName;
      }
    }
    console.log("Contenu de la queryDatabase :", queryDatabase.accountSummaryList);
    accountCache[account.id] = {
      id: account.id,
      name: account.lastName + " " + account.firstName,
      creationDate: account.creationDate,
    };
    console.log("Contenu du cache :", accountCache);
    return account;
  },
};
