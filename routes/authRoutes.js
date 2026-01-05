import express from "express";
import {
  signup,
  deleteUser,
  verifyEmail,
  login,
  setUserRole,
  forgotPassword,
  resetPassword,
  getUserDetails,
  getAllAdmins,
  getAllUsers,
  createProduct,
  deleteProduct,
  getProductById, 
  getAllProducts,
  addToCart,
  getCart,
  removeFromCart,
  clearCart,
  createCheckoutSession,
} from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();


router.post("/signup", signup);
router.delete("/deleteUser/:id", protect, deleteUser);
router.get("/verify/:token", verifyEmail);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/me", protect, getUserDetails);
router.get("/users", getAllUsers);
router.get("/admins", getAllAdmins);
router.post("/createProduct", protect, upload.fields([{ name: "image", maxCount: 1 },{ name: "subImages", maxCount: 6 },]), createProduct);        // POST new product
router.get("/getAllProducts", getAllProducts);        // Get all products
router.get("/:id", getProductById);     // Get one product by ID
router.delete("/delete/:id", protect, deleteProduct);
router.put("/setRole/:id", protect, setUserRole)
// Protected routes — must be logged in
router.post("/add", protect, addToCart);
router.get("/getCart/:userId", getCart);
router.delete("/remove/:userId/:productId", protect, removeFromCart);
router.delete("/clear/:userId", protect, clearCart);
router.post("/create-checkout-session", protect, createCheckoutSession);
export default router;
