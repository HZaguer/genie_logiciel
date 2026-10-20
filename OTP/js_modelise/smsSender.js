import { libGsmClient, LibGsmSms } from "./libGSM.js";
import { config } from "./config.js";

export function sendSMS(smsContent, phoneNumber) {
    libGsmClient.attachToSMSC(config.smscNumber);
    const sms = new LibGsmSms();
    sms.senderNum = config.smsSenderNumber;
    sms.num = phoneNumber;
    sms.payload = smsContent;
    libGsmClient.routeSMS(sms);
}