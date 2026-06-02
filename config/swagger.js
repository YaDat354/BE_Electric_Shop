const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'BE Electric Shop API',
      version: '1.0.0',
      description: 'API documentation for BE Electric Shop'
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Local server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        ValidationError: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Validation failed' },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: { type: 'string', example: 'quantity' },
                  message: { type: 'string', example: '"quantity" must be a positive number' }
                }
              }
            }
          }
        },
        CreateProductInput: {
          type: 'object',
          required: ['categoriesid', 'price', 'brand', 'quantity'],
          properties: {
            categoriesid: { type: 'integer', example: 1 },
            price: { type: 'integer', example: 23990000 },
            brand: { type: 'string', example: 'Samsung' },
            quantity: { type: 'integer', example: 20 },
            languagecode: { type: 'string', enum: ['en', 'vi'], example: 'en' },
            name: { type: 'string', example: 'Samsung Galaxy S Series Smartphone' },
            description: { type: 'string', example: 'Flagship Android phone with premium display.' }
          }
        },
        UpdateProductInput: {
          type: 'object',
          properties: {
            categoriesid: { type: 'integer', example: 1 },
            price: { type: 'integer', example: 19990000 },
            brand: { type: 'string', example: 'Apple' },
            quantity: { type: 'integer', example: 15 },
            languagecode: { type: 'string', enum: ['en', 'vi'], example: 'vi' },
            name: { type: 'string', example: 'Dien thoai Apple iPhone ban tieu chuan' },
            description: { type: 'string', example: 'Dien thoai iOS on dinh.' }
          }
        },
        CreateGRNInput: {
          type: 'object',
          required: ['totalprice', 'userid'],
          properties: {
            date: { type: 'string', format: 'date-time' },
            totalprice: { type: 'integer', example: 182800000 },
            userid: { type: 'integer', example: 4 }
          }
        },
        CreateGRNDetailInput: {
          type: 'object',
          required: ['grnid', 'productid', 'price', 'quantity'],
          properties: {
            grnid: { type: 'integer', example: 1 },
            productid: { type: 'integer', example: 1 },
            price: { type: 'integer', example: 22000000 },
            quantity: { type: 'integer', example: 5 }
          }
        },
        CreateOrderInput: {
          type: 'object',
          required: ['userid', 'totalprice', 'phonenumber', 'address', 'status'],
          properties: {
            userid: { type: 'integer', example: 1 },
            totalprice: { type: 'integer', example: 25370000 },
            phonenumber: { type: 'string', example: '0912345678' },
            address: { type: 'string', example: '123 Tran Hung Dao, Quan 1, TP.HCM' },
            promotionid: { type: 'integer', nullable: true, example: null },
            status: { type: 'integer', enum: [-1, 0, 1], example: 0 }
          }
        },
        UpdateOrderInput: {
          type: 'object',
          properties: {
            status: { type: 'integer', enum: [-1, 0, 1], example: 1 },
            process: { type: 'string', format: 'date-time', nullable: true },
            shipping: { type: 'string', format: 'date-time', nullable: true },
            delivered: { type: 'string', format: 'date-time', nullable: true },
            phonenumber: { type: 'string', example: '0988123456' },
            address: { type: 'string', example: '56 Nguyen Hue, Quan 1, TP.HCM' }
          }
        },
        CreateOrderDetailInput: {
          type: 'object',
          required: ['orderid', 'productid', 'quantity'],
          properties: {
            orderid: { type: 'integer', example: 1 },
            productid: { type: 'integer', example: 1 },
            quantity: { type: 'integer', example: 1 }
          }
        },
        CreateCartInput: {
          type: 'object',
          required: ['userid', 'productid', 'quantity'],
          properties: {
            userid: { type: 'integer', example: 1 },
            productid: { type: 'integer', example: 1 },
            quantity: { type: 'integer', example: 2 },
            notes: { type: 'string', example: 'Please check product box before shipping.' }
          }
        },
        CheckoutInput: {
          type: 'object',
          required: ['userid', 'cartitemid', 'phonenumber', 'address', 'promotioncode'],
          properties: {
            userid: { type: 'integer', example: 1 },
            cartitemid: { type: 'array', items: { type: 'integer' }, example: [1, 2, 3] },
            phonenumber: { type: 'string', example: '0912345678' },
            address: { type: 'string', example: '123 Tran Hung Dao, Quan 1, TP.HCM' },
            promotioncode: { type: 'string', example: '' }
          }
        },
        CreatePaymentInput: {
          type: 'object',
          required: ['orderid', 'paymentmethod'],
          properties: {
            orderid: { type: 'integer', example: 1 },
            paymentmethod: { type: 'string', enum: ['cash', 'paypal', 'vnpay', 'VNPAY'], example: 'vnpay' },
            returnurl: { type: 'string', format: 'uri', example: 'http://localhost:3030/paymentsuccess' }
          }
        }
      }
    }
  },
  apis: ['./routers/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
