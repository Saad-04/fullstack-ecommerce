const express = require('express')
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, updateUserAdmin, getUserDetail, updatePassword, updateProfile, getAllUsers, getSingleUser, deleteUser, updateUserRole } = require('../controllers/userController.js');
const { isAuthenticated, ownerRoles } = require('../middleware/auth.js');
const router = express.Router();
const multer = require('multer');
const upload = multer()

router.route('/register').post(upload.single('file'), registerUser);
router.route('/login').post(loginUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/password/update').put(isAuthenticated, updatePassword);
router.route('/profile/update').put(isAuthenticated, updateProfile);
router.route('/logout').get(isAuthenticated, logoutUser);
router.route('/profile').get(isAuthenticated, getUserDetail);
router.route('/admin/all-users').get(isAuthenticated, ownerRoles('admin'), getAllUsers);
router.route('/admin/single-user/:id').get(isAuthenticated, ownerRoles('admin'), getSingleUser);
router.route('/admin/delete-user/:id').delete(isAuthenticated, ownerRoles('admin'), deleteUser);
router.route('/admin/update-user-admin/:id').put(isAuthenticated, ownerRoles('admin'), updateUserRole)

module.exports = router;