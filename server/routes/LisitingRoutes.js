import express from 'express';
import { createListing, getUserListing, updateListing } from '../controller/ListingController.js';
import { verifyUserAndListing } from '../middleware/ListingMiddleware.js';

const router=express.Router();

router.get("/userListing/:email/:id",getUserListing)
router.post("/add-new-listing/",createListing)
router.put("/update-listing/:id/:email",verifyUserAndListing,updateListing)

export default router;