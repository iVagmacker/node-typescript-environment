import { Router } from 'express';
import ProfileControler from '../controllers/ProfileControler';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
const updateProfile = new ProfileControler();

profileRouter.use(ensureAuthenticated);

profileRouter.put('/', updateProfile.update);
profileRouter.get('/', updateProfile.show);

export default profileRouter;
