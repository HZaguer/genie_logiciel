import { libSmtpClient, LibSmtpEmail } from "./libSMTP.js";
import { config } from "./config.js";

export function sendEmail(emailContent, address) {
    libSmtpClient.connect();
    const email = new LibSmtpEmail();
    email.senderAddress = config.emailSenderAddress;
    email.recipientAddress = address;
    email.content = emailContent;
    libSmtpClient.send(email);
}