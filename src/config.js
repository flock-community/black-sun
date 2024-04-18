import { TOKENS_FILE_PATH } from "../config.js";
import { fileHeader } from "./formats/file-headers/register.js";

export default {
	source: [TOKENS_FILE_PATH],
	platforms: {
		js: {
			transformGroup: "custom/js",
			buildPath: "build/js/",
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
