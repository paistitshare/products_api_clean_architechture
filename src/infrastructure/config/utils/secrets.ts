import dotenv from 'dotenv';
import fs from 'fs';

const SECRETS_FILE_NAME = '.env';
const DEFAULT_PORT = 3000;

if (fs.existsSync(SECRETS_FILE_NAME)) {
    dotenv.config({ path: SECRETS_FILE_NAME });
}

export const ENVIRONMENT = process.env.NODE_ENV;
export const PORT = process.env.PORT || DEFAULT_PORT;
