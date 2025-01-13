/** defines all transformers which will be applied to the web in a consistent way */
export const infimaTransformGroup = {
	name: "infima",
	transforms: [
		"attribute/cti",
		"attribute/color",
		"name/kebab",
		"size/px",
		"color/css",
		// custom transformers
		"name/variable/default",
		"ts/color/rgba",
	],
};
