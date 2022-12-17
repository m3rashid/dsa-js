'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
const structures_1 = __importDefault(require('./structures'));
const algorithms_1 = __importDefault(require('./algorithms'));
exports.default = Object.assign(Object.assign({}, structures_1.default), algorithms_1.default);
