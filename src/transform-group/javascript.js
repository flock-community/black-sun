/** defines all transformers which will be applied to the web in a consistent way */
export const javascriptTransformGroup = {
	name: "custom/js",
	transforms: [
		"attribute/cti",
		"attribute/color",
		"name/pascal",
		"size/rem",
		"color/hex",
		// custom transformers
		"name/variable/color",
		"ts/color/rgba",
	],
};
