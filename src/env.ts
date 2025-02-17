/*==================================================
                Dotenv Configuration
==================================================*/

import dotenv from 'dotenv';
dotenv.config();

export interface ENV_INTERFACE {
    GCLOUD_PROJECT_ID: string;
    GCLOUD_PROJECT_ZONE: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    CREDS: string[];
}

export const ENV: ENV_INTERFACE = {
    GCLOUD_PROJECT_ID: process.env.GCLOUD_PROJECT_ID || '',
    GCLOUD_PROJECT_ZONE: process.env.GCLOUD_PROJECT_ZONE || '',
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
    CREDS: process.env.CREDS ? JSON.parse(process.env.CREDS) : []
};