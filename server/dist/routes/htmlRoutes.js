import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();
router.get('*', (_, responseObj) => {
    responseObj.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});
export default router;
