import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  // router.get("/", controller.home.index);
  router.get("/taobao/cart-info", controller.taobao.cartInfo);
};
