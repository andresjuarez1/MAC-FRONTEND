const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

function generateToken(user_email, user_pwd) {
    try {
        const payload = {
            user_email: user_email,
            user_pwd: user_pwd,
        };
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
        return token;
    } catch (error) {
        throw new Error("Error generando el token JWT");
    }
}

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        return decoded;
    } catch (error) {
        throw new Error("Token JWT inválido");
    }
}

module.exports = { generateToken, verifyToken };
