import {
	BUILD_PATH_INFIMA,
	BUILD_PATH_JS,
	TOKENS_FILE_PATH,
} from "../config.js";
import { fileHeader } from "./formats/file-headers/customFileHeader.js";

export default {
	source: [TOKENS_FILE_PATH],
	platforms: {
		infima: {
			prefix: "ifm",
			transformGroup: "infima",
			buildPath: BUILD_PATH_INFIMA,
			files: [
				{
					format: "css/variables",
					destination: "custom.css",
				},
			],
		},
		js: {
			transformGroup: "custom/js",
			buildPath: BUILD_PATH_JS,
			options: { fileHeader },
			files: [
				{
					format: "javascript/es6",
					destination: "colors.js",
					filter: {
						attributes: {
							category: "color",
						},
					},
				},
			],
		},
	},
};
