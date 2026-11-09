import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Contenu de la BDD :", ACCOUNT_LIST);
    return account;
  },
  retrieveAccountList() {
    const result = [];
    for (const account of ACCOUNT_LIST) {
	result.push({
      		id: account.id,
      		lastName: account.lastName,
      		firstName: account.firstName,
    	});
    }
    return result
  ;},
  
  updateAccount(account) {
    for (const storedAccount of ACCOUNT_LIST) {
      if (storedAccount.id === account.id) {
        storedAccount.lastName = account.lastName;
        storedAccount.firstName = account.firstName;
      }
    }
    console.log("Contenu de la BDD :", ACCOUNT_LIST);
    return account;
  },
  retrieveAccount(id) {
    for (const account of ACCOUNT_LIST) {
      if (account.id === id) {
        return {
          id: account.id,
          lastName: account.lastName,
          firstName: account.firstName,
          creationDate: account.creationDate,
        };
      }
    }
    return null;
  },
};
