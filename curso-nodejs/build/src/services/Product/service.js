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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_model_1 = __importDefault(require("../../models/Product.model"));
const HttpStatusCode_1 = __importDefault(require("../../commons/constants/HttpStatusCode"));
const error_1 = require("../../config/error");
/**
 * @export
 * @implements {IProductModelService}
 */
const ProductService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof ProductFacade
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Product_model_1.default.findAll();
        });
    },
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {};
            yield Product_model_1.default.create(data);
            response.status = HttpStatusCode_1.default.OK;
            response.message = 'Created product';
            return response;
        });
    },
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {};
            yield Product_model_1.default.update(data, { where: { id: id }
            });
            response.status = HttpStatusCode_1.default.OK;
            response.message = 'Updated product';
            return response;
        });
    },
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {};
            if (!(yield Product_model_1.default.findByPk(id)))
                throw new error_1.NotFoundError('Not found', HttpStatusCode_1.default.NOT_FOUND);
            yield Product_model_1.default.destroy({ where: { id: id } });
            response.status = HttpStatusCode_1.default.OK;
            response.message = 'Deleted product';
            return response;
        });
    }
};
exports.default = ProductService;
//# sourceMappingURL=service.js.map