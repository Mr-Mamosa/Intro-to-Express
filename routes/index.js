"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'about' });
});
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects' });
});
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'services' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact' });
});
module.exports = router;
//# sourceMappingURL=index.js.map