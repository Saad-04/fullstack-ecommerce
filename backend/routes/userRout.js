const express = require('express')
const {registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetail, updatePassword, updateProfile} = require('../controllers/userController.js');
const { isAuthenticated } = require('../middleware/auth.js');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/password/update').put(isAuthenticated,updatePassword);
router.route('/profile/update').put(isAuthenticated,updateProfile);
router.route('/logout').get(logoutUser);
router.route('/profile').get(isAuthenticated,getUserDetail);

module.exports = router;