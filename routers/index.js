const express = require('express');

const { categoriesRouter } = require('./categories.routers');
const { usersRouter } = require('./users.routers');
const { roleRouter } = require('./roles.routers');
const { productRouter } = require('./products.routers');
const { reviewsRouter } = require('./reviews.routers');
const { promotionsRouter } = require('./promotions.routers');
const { cartsRouter } = require('./carts.routers');
const { grnRouter } = require('./grn.routers');
const { grndetailsRouter } = require('./grndetails.routers');
const { orderRouter } = require('./orders.routers');
const { orderdetailRouter } = require('./orderdetails.routers');
const { imgproductRouter } = require('./imagesproduct.routers');
const { imguserRouter } = require('./imagesuser.routers');
const { paymentRouter } = require('./payment.routers');
const { notificationsRouter } = require('./notifications.router');
const { proTranslationRouter } = require('./protranslation.routers');
const { chatRouter } = require('./chatRouter');
const { flashsalesRouter } = require('./flashsales.routers');
const { flashsaledetailsRouter } = require('./flashsaledetails.routers');

const rootRouter = express.Router();

console.log(typeof categoriesRouter);
console.log(typeof usersRouter);
console.log(typeof roleRouter);
console.log(typeof productRouter);
console.log(typeof reviewsRouter);
console.log(typeof promotionsRouter);
console.log(typeof cartsRouter);
console.log(typeof grnRouter);
console.log(typeof grndetailsRouter);
console.log(typeof orderRouter);
console.log(typeof orderdetailRouter);
console.log(typeof imgproductRouter);
console.log(typeof imguserRouter);
console.log(typeof paymentRouter);
console.log(typeof notificationsRouter);
console.log(typeof proTranslationRouter);
console.log(typeof chatRouter);
console.log(typeof flashsalesRouter);
console.log(typeof flashsaledetailsRouter);

rootRouter.use('/categories', categoriesRouter);
rootRouter.use('/users', usersRouter);
rootRouter.use('/roles', roleRouter);
rootRouter.use('/products', productRouter);
rootRouter.use('/reviews', reviewsRouter);
rootRouter.use('/promotions', promotionsRouter);
rootRouter.use('/carts', cartsRouter);
rootRouter.use('/grns', grnRouter);
rootRouter.use('/grndetails', grndetailsRouter);
rootRouter.use('/orders', orderRouter);
rootRouter.use('/orderdetails', orderdetailRouter);
rootRouter.use('/imgproduct', imgproductRouter);
rootRouter.use('/imguser', imguserRouter);
rootRouter.use('/payment', paymentRouter);
rootRouter.use('/notifications', notificationsRouter);
rootRouter.use('/protranslations', proTranslationRouter);
rootRouter.use('/chat', chatRouter);
rootRouter.use('/flashsales', flashsalesRouter);
rootRouter.use('/flashsaledetails', flashsaledetailsRouter);

module.exports = {
  rootRouter
};