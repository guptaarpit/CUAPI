const app = require('express');
const { verifyAuthorization } = require('./shared');

const router = app();
const unAuthorizedStatusConst = 'Unauthorized';
const unAuthorizedCodeConst = 401;
router.use((req, res, next) => {
  try {
    const payload = verifyAuthorization(req.headers);
    if (payload) {
      return next();
    }

    const err = new Error(unAuthorizedStatusConst);
    err.status = unAuthorizedCodeConst;
    return next(err);
  } catch (ex) {
    return next(ex);
  }
});

module.exports = router;
