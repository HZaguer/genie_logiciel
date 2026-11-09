import { accountService } from "./accountService.mjs";

const halima = accountService.addAccount("Zaguer", "Halima");
accountService.addAccount("Ouezghari", "Assia");

console.log("Liste des comptes :", accountService.getAccountList());

accountService.saveAccount(halima.id, "Zaguer", "Halima-Modifiee");

console.log("Liste après modification :", accountService.getAccountList());

const account = accountService.getAccount(halima.id);
console.log("Compte récupéré :", account);
