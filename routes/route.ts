import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getHomeIndex } from '../Home/HomeController.ts';
import { getLoginPage, login } from '../User/UserController.ts';
const router = new Router();
router
  .get('/', getHomeIndex)
  .get('/login', getLoginPage)
  .post('/authen', login)

export default router;