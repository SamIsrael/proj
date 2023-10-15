const auth = (req, res, next) => {
    if(req.body.username) {
        res.status(401).json({"message": "Not Authorised"});
    } else next();
};

module.exports = auth;