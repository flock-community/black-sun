import StyleDictionary from "style-dictionary";
import "../../name-variable-default/register.js";
import "../../color-rgba/register.js";

/** defines all transformers which will be applied to the web in a consistent way */
StyleDictionary.registerTransformGroup({
	name: "infima",
	transforms: [
		"attribute/cti",
		"attribute/color",
		"name/cti/kebab",
		"size/px",
		"color/css",
		// custom transformers
		"name/variable/default",
		"ts/color/rgba",
	],
});
