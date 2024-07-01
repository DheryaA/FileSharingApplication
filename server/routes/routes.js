import express, { Router } from "express";
import {uploadImage,downloadImage} from "../controller/imagecontroller.js"
import {uploaded} from "../utils/upload.js";

const router=express.Router();



router.post('/upload',uploaded.single('file'),uploadImage);
router.get("/file/:fileId",downloadImage);
export default router;