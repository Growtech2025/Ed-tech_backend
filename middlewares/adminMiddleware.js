
require("dotenv").config();
async function adminMiddleware(request, response, next) {
    try {
        console.log("me to Admin middleware me hu", request.user.role)
        const role = request.user.role
        //validations
        if (role === "admin") {
            next()
        }
        else {
            return response.status(404).json({
                message: `You are ${request.user.role} not to work with job CRUD`,
                success: false,
            })
        }

    }
    catch (error) {
        console.log(error)
        return response.status(500).json({
            message: "Pahli fursat me niklo",
            success: false,
        })
    }
}
module.exports = adminMiddleware;