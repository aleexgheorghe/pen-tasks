import jwt from "jsonwebtoken";

export const createAccessToken = (payload) => {

    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "1h"
        }, (err, token) => {
            if (err) reject(err);
            resolve(token);
        }
        );
    });
};
