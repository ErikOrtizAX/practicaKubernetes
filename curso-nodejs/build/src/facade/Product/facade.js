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
const services_1 = require("../../services");
/**
 * @export
 * @implements {IProductModelService}
 */
const ProductFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof ProductFacade
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let Product = yield services_1.ProductService.findAll();
            return Product;
        });
    },
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let Product = yield services_1.ProductService.save(data);
            return Product;
        });
    },
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let Product = yield services_1.ProductService.update(id, data);
            return Product;
        });
    },
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let Product = yield services_1.ProductService.remove(id);
            return Product;
        });
    }
};
exports.default = ProductFacade;
//# sourceMappingURL=facade.js.map