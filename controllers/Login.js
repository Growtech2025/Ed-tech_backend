const UserModel = require("../modals/UserModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function Login(req, res) {
    try {
        const { email, password } = req.body;

        // Input validation
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
                success: false,
            });
        }

        // Find user by email
        let User = await UserModel.findOne({ email });
        if (!User) {
            return res.status(404).json({
                message: "User not found. Please create an account.",
                success: false,
            });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, User.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Incorrect password",
                success: false,
            });
        }

        // Check if user is verified
        if (User.verifyUser === false) {
            return res.status(403).json({
                message: `Please verify your account before login`,
                success: false,
            });
        }

        // RBAC: allow only specific roles
        const allowedRoles = ["student", "admin", "instructor"];
        if (!allowedRoles.includes(User.accountType)) {
            return res.status(403).json({
                message: "Access denied: Invalid user role",
                success: false,
            });
        }

        // (Optional) Customize behavior based on role
        // For example:
        if (User.accountType === "admin") {
            // Any admin-specific logic here
        } else if (User.accountType === "student") {
            // Any student-specific logic here
        } else if (User.accountType === "instructor") {
            // Any instructor-specific logic here
        }

        // Generate JWT token with user id, role, and email
        const payload = {
            id: User._id,
            role: User.accountType,
            email: User.email,
        };

        const token = jwt.sign(payload, process.env.JWT, {
            expiresIn: "260s", // adjust token expiry as needed
        });

        // Prepare user object to send without password
        const userObj = User.toObject();
        userObj.token = token;
        delete userObj.password;

        // Send token in header and user info in response
        res
            .status(200)
            .header("Authorization", `Bearer ${token}`)
            .json({
                message: `Login successful as ${User.accountType}`,
                data: userObj,
                success: true,
            });
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({
            message: "Internal server error during login",
            success: false,
        });
    }
}

module.exports = Login;
