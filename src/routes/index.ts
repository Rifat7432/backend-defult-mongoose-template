import express from 'express';
import { UserRouter } from '../app/modules/user/user.route';
import { AuthRouter } from '../app/modules/auth/auth.route';
import { MessageRoutes } from '../app/modules/message/message.route';
import { ChatRoutes } from '../app/modules/chat/chat.route';

const router = express.Router();
const routes = [
     {
          path: '/auth',
          route: AuthRouter,
     },
     {
          path: '/users',
          route: UserRouter,
     },
     {
          path: '/chats',
          route: ChatRoutes,
     },
     {
          path: '/massages',
          route: MessageRoutes,
     },
];

routes.forEach((element) => {
     if (element?.path && element?.route) {
          router.use(element?.path, element?.route);
     }
});

export default router;
