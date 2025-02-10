// import { Client, LocalAuth } from "whatsapp-web.js"
// import connectToDB from "@/config/db"
// import OtpModel from "@/models/Otp"
// import { verifyPhone } from "@/src/utils/auth";



// const client = new Client({
//     authStrategy: new LocalAuth(),
//     puppeteer: { headless: true },
// })

// client.on("qr", (qr) => {
//     console.log("لطفاً این QR Code رو اسکن کن تا واتساپ متصل بشه:");
//     import("qrcode-terminal").then((qrcode) => qrcode.generate(qr, { small: true }));
// });

// client.on("ready", () => {
//     console.log("واتساپ متصل شد و آماده ارسال پیام است!");
// });

// client.initialize();

// function generateOTP() {
//     return Math.floor(1000 + Math.random() * 9000).toString();
// }

// function getLast10Digits(phone) {
//     const digits = phone.replace(/\D/g, "");
//     const last10Digits = digits.slice(-10);
//     const phoneNumberWithPrefix = "98" + last10Digits;
//     return phoneNumberWithPrefix;
// }


// export async function POST(req) {
//     try {
//         const body = await req.json()
//         const { phone: phoneGot } = body
//         const phone = getLast10Digits(phoneGot)

//         if (!phone.trim()) {
//             return Response.json({ message: 'phone is empity ' }, { status: 422 })
//         }

//         const isValidPhone = await verifyPhone(phone)
//         if (!isValidPhone) {
//             return Response.json({ message: 'phone is not valid ' }, { status: 422 })
//         }

//         const codeNumber = generateOTP()
//         const expireTime = Date.now() + 60_000
//         const message = `کد تأیید شما: ${codeNumber}`;

//         const NewOtp = { phone, code: codeNumber, expireTime }

//         await connectToDB()
//         const OtpCreated = await OtpModel.create({ NewOtp })

//         if (OtpCreated) {
//             const DidSendOtp = await client.sendMessage(`${phone}@c.us`, message);
//             console.log(`📩 OTP برای ${phone} ارسال شد: ${otp}`);
//             if (DidSendOtp) {
//                 return Response.json({ message: 'otp created and sended' }, { status: 201 })
//             }
//         }


//         return Response.json({ message: 'some thing wrong => ' }, { status: 501 })
//     } catch (err) {
//         return Response.json({ message: err.message }, { status: 501 })
//     }
// }

export async function GET(req) {
    return Response.json({ message:'hi bro hi'})
} 