import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import ItemsController from './controllers/ItemsController';
import PoitsController from './controllers/PointsController';



const routes = express.Router();
const upload  = multer(multerConfig);

const pointsController = new PoitsController();
const itemsController =  new ItemsController();
routes.get('/items',itemsController.index );

routes.post('/points', upload.single('image'), pointsController.create);

routes.get('/points',pointsController.index);
routes.get('/points/:id', pointsController.show);

 export default routes;