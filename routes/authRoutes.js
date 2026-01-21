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
  stripeCheckout,
  paystackCheckout,
  verifyPaystack,
  downloadTemplate,
} from "../controllers/authController.js";

import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

/* ================= AUTH ================= */
router.post("/signup", signup);
router.post("/login", login);
router.get("/verify/:token", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/me", protect, getUserDetails);

/* ================= USERS ================= */
router.get("/users", getAllUsers);
router.get("/admins", getAllAdmins);
router.delete("/deleteUser/:id", protect, deleteUser);
router.put("/setRole/:id", protect, setUserRole);

/* ================= PRODUCTS ================= */
router.post(
  "/products",
  protect,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "subImages", maxCount: 6 },
  ]),
  createProduct
);

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.delete("/products/:id", protect, deleteProduct);

/* ================= CART ================= */
router.post("/cart/add", protect, addToCart);
router.get("/cart/:userId", getCart);
router.delete("/cart/remove/:userId/:productId", protect, removeFromCart);
router.delete("/cart/clear/:userId", protect, clearCart);

/* ================= PAYMENTS ================= */
router.post("/checkout/stripe", protect, stripeCheckout);
router.post("/checkout/paystack", protect, paystackCheckout);
router.get("/checkout/paystack/verify/:reference", verifyPaystack);

/* ================= DOWNLOAD ================= */
router.get("/download/:productId", downloadTemplate);

export default router;
