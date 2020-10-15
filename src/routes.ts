import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/update';
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router();
const update = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', update.array('images'), OrphanagesController.create)

export default routes;