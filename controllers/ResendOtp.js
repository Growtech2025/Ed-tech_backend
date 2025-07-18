const EmailSend = require("../utils/EmailSend.js");
const User = require("../modals/UserModal.js");
const GenerateOtp = require("../utils/GenerateOtp.js");

async function ResendOtp(req, res) {
  try {
    const { email } = req.body;
    if (email == "") {
      return res.status(400).json({
        message: "Please fill the empty data, verify account controller",
        succes: false,
      });
    }

    const isuserExist = await User.findOne({ email });

    if (!isuserExist) {
      return res.status(404).json({
        message: `Your email is ${email} not registered in our website, please signup`,
        succes: false,
      });
    }

    if (isuserExist.verifyUser === false) {
      return res.status(404).json({
        message: "Plase verify your account ",
        succes: false,
      });
    }
    const otp = GenerateOtp();

    EmailSend(
      email,
      "Resend Otp for Acc Verification",
      `hello ${isuserExist.fName} This is otp for your account ${otp}`
    );

    return res.status(200).json({
      message: "Otp send successfully",
      succes: true,
    });
  } catch (e) {
    console.log("Error in resendotp controller", error);
    return res.status(500).json({
      message: "Internal server in resendotp controller",
      success: false,
    });
  }
}
module.exports = ResendOtp;