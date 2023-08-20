import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
            console.error('JWT verification error:', err.message);

            return res.status(401).json({ message: "Unauthorized" });
        }

        req.userId = decodedToken.id;

        next();
    });
}
