import { Router, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const router = Router();
if (true || process.env.PORT) {
    router.get('*', (_, responseObj: Response) => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        responseObj.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
    });
}
export default router;