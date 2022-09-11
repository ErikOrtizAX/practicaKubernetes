"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTo = void 0;
/**
 * @export
 * @class ProductTo
 *
 * @swagger
 * components:
 *  schemas:
 *    ProductTo:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *          description: Id od product
 *          example: 1
 *        name:
 *          type: string
 *          description: Name of product
 *          example: "Este es el nombre de un producto"
 *        description:
 *          type: string
 *          description: Date of the promotion
 *          example: "Esto es la descripción de un producto"
 *        qty:
 *          type: number
 *          description: Quantity of products
 *          example: 10
 */
class ProductTo {
    constructor(id, name, description, qty) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.qty = qty;
    }
}
exports.ProductTo = ProductTo;
//# sourceMappingURL=ProductoTo.js.map