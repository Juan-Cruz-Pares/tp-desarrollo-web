import admin from "firebase-admin";
import dotenv from "dotenv";
import { initializeApp, cert } from 'firebase-admin/app';

dotenv.config();

if (!admin.getApps().length) {
    initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        }),
    });
}

export default admin;