import { accountService } from "./accountService.mjs";

accountService.addAccount("Zaguer", "Halima");
accountService.addAccount("Ouezghari", "Assia");

const accounts = accountService.getAccountList();
console.log("Liste des comptes :", accounts);
