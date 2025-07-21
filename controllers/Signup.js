const EmailSend = require("../utils/EmailSend");
const User = require("../modals/UserModal.js");
const GenerateOtp = require("../utils/GenerateOtp.js");
const bcrypt = require("bcrypt")
async function Signup(req, res) {
    try {

        //step-1 Get the data 
        const { firstName, lastName, email, password, accountType } = req.body;

        //step-2 validation
        if (firstName === "" || lastName === "" || email === "" || password === "") {

            return res.status(400).json({
                message: "You have to fill the all data empty data is not allowed, Signup controller",
                success: false
            })
        }

        //step-3 Generate otp 
        const otp = GenerateOtp();
        //OTP kee expiry time nikal lo
        const otpExp = 5 * 60 * 1000;


        //step-4 account open karo
        //bhai password encrpt kar do 
        let encryptPassword;

        try {
            encryptPassword = await bcrypt.hash(password, 10);

        }
        catch (error) {
            console.log("Error in jab password ko encrpy kar rhe hai,signup controller", error);
            return res.status(500).json({
                message: "Internal server while hashing the password",
                success: false
            })
        }

        const newUser = await User.create({ firstName, lastName, email, password: encryptPassword,accountType, otp, otpExpireTime: otpExp })


        //step-5 Verifaction email
        EmailSend(email, "Verify Your Account", `Congralutions ${firstName} your have created your accouunt please verify your account using this ${otp}`)

        //step-6 account create ho gya hai response return kar do 
        return res.status(201).json({
            message: "Your Account has been created successfully",
            success: true,
            data: newUser
        })


    }
    catch (error) {
        console.log("Error in signup controller", error);
        return res.status(500).json({
            message: "Internal server in signup controller",
            success: false
        })
    }
}
module.exports = Signup;