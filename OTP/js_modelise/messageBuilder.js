export function buildSmsMessage(otp) {
    let smsContent = "Bonjour,\n";
    smsContent += `Pour vous connecter sur le portail entrez le code : ${otp}\n`;
    smsContent += "Si vous n'êtes pas à l'origine de cette demande, contactez le support.";
    return smsContent;
}

export function buildEmailMessage(otp) {
    let email = "<p>Bonjour,</p>";
    email += `<p>Pour vous connecter sur le portail entrez le code : ${otp}</p>`;
    email += "<p>Si vous n'êtes pas à l'origine de cette demande, contactez le support.</p>";
    return email;
}