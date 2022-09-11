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
exports.remove = exports.update = exports.save = exports.findAll = void 0;
const facade_1 = __importDefault(require("./facade"));
const HttpStatusCode_1 = __importDefault(require("../../commons/constants/HttpStatusCode"));
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
function findAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const Product = yield facade_1.default.findAll();
            res.status(HttpStatusCode_1.default.OK).json(Product);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.findAll = findAll;
function save(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield facade_1.default.save(req.body);
            res.status(HttpStatusCode_1.default.OK).json(response);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.save = save;
function update(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield facade_1.default.update(Number(req.params.id), req.body);
            res.status(HttpStatusCode_1.default.OK).json(response);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.update = update;
function remove(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield facade_1.default.remove(Number(req.params.id));
            res.status(HttpStatusCode_1.default.OK).json(response);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.remove = remove;
//# sourceMappingURL=index.js.map