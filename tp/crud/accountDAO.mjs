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
  updateAccount(account) {},
  retrieveAccount(id) {},
};
