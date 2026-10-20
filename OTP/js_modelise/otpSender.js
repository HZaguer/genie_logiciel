import { database } from "./database.js";
import { generateOtp } from "./otpGenerator.js";
import { buildSmsMessage, buildEmailMessage } from "./messageBuilder.js";
import { sendSMS } from "./smsSender.js";
import { sendEmail } from "./emailSender.js";

export function sendOTP(accountId) {
    const otp = generateOtp();
    const account = database.fetchAccount(accountId);

    if (account.preferSMS) {
        sendSMS(buildSmsMessage(otp), account.phoneNumber);
    } else {
        sendEmail(buildEmailMessage(otp), account.email);
    }
}