import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config({path:"/home/my/Desktop/otp-auth/.env"})

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid,authToken)
const sid = process.env.TWILIO_SERVICE_SID;
export async function sendOtp(otp:string,phoneNo:string)
{
    try {
        
        await twilioClient.messages.create({
            body :`Your Otp is ${otp}`,
            from:'+16304134980',
            to:phoneNo
        })
        
    } catch (error) {
        console.log(error)
    }
}
