import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

// Command : ajouter des comptes
const halima = accountCommand.addAccount("Zaguer", "Halima");
accountCommand.addAccount("Ouezghari", "Assia");

// Query : lister les comptes
console.log("Liste des comptes :", accountQuery.getAccountList());

// Command : modifier un compte
accountCommand.saveAccount(halima.id, "Zaguer", "Halima-Modifiee");

// Query : lister après modification
console.log("Liste après modification :", accountQuery.getAccountList());

// Query : récupérer un compte
console.log("Compte récupéré :", accountQuery.getAccount(halima.id));
