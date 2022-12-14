"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const facade_1 = require("../facade");
/**
 * @constant {express.Router}
 */
const router = express_1.Router();
/**
 * GET method route
 * @example http://localhost:PORT/products
 * @swagger
 * /api/v1/products/:
 *  get:
 *    description: Get all Products
 *    tags: ["Products"]
 *    responses:
 *      200:
 *        description: All Products
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: Products
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 *      404:
 *        description: Not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.get('/api/v1/products', facade_1.ProductFacade.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/products
 * @swagger
 * /api/v1/products/:
 *  post:
 *    description: Post info from new products
 *    tags: ["Products"]
 *    requestBody:
 *      description: Create a new product
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *               $ref: '#/components/schemas/ProductTo'
 *    responses:
 *      200:
 *        description: ok
 *        content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *                  status:
 *                    type: number
 *                    example: 200
 *                  message:
 *                    type: string
 *                    example: 'Save data successful'
 *                  data:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/ProductTo'
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 *      404:
 *        description: Not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.post('/api/v1/products', facade_1.ProductFacade.save);
/**
* PUT method route
* @example http://localhost:PORT/products
* @swagger
* /api/v1/products/:id:
*  put:
*    description: Put info from a products
*    tags: ["Products"]
*    parameters : [
*      {
*           name: 'id',
*           in: 'query',
*           schema: {
*             type: number,
*             example: '1'
*           },
*           required: true
*      },
*    ]
*    requestBody:
*      description: Edit fields of product
*      required: true
*      content:
*          application/json:
*              schema:
*                 $ref: '#/components/schemas/ProductTo'
*    responses:
*      200:
*        description: ok
*        content:
*            application/json:
*             schema:
*              type: object
*              properties:
*                  status:
*                    type: number
*                    example: 200
*                  message:
*                    type: string
*                    example: 'Update data successful'
*                  data:
*                      type: array
*                      items:
*                          $ref: '#/components/schemas/ProductTo'
*      500:
*        description: Internal Server Error
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ErrorTo'
*      400:
*        description: Bad Request
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ErrorTo'
*      401:
*        description: Unauthorized
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ErrorTo'
*      404:
*        description: Not found
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ErrorTo'
*/
router.put('/api/v1/products/:id', facade_1.ProductFacade.update);
/**
* DELETE method route
* @example http://localhost:PORT/products
* @swagger
* /api/v1/products/:id
*  delete:
*    description: Delete any product by Id
*    tags: ["Products"]
*    parameters : [
*      {
*           name: 'id',
*           in: 'query',
*           schema: {
*             type: number,
*             example: '1'
*           },
*           required: true
*      },
*    ]
*    responses:
*      200:
*        description: ok
*        content:
*            application/json:
*             schema:
*              type: object
*              properties:
*                  status:
*                    type: number
*                    example: 200
*                  message:
*                    type: string
*                    example: 'Deleted data successful'
*      500:
*        description: Internal Server Error
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ErrorTo'
*      400:
*        description: Bad Request
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ErrorTo'
*      401:
*        description: Unauthorized
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ErrorTo'
*      404:
*        description: Not found
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ErrorTo'
*/
router.delete('/api/v1/products/:id', facade_1.ProductFacade.remove);
/**
 * GET method route
 * @example http://localhost:PORT/ping
 * @swagger
 * /ping/:
 *  post:
 *    description: Test service
 *    tags: ["Ping"]
 *    responses:
 *      200:
 *        description: Pong
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: pong
 */
router.get('/ping', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('pong');
}));
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=ProductRouter.js.map