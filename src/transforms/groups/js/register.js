import StyleDictionary from "style-dictionary";
import "../../color-rgba/register.js";
import "../../name-variable-color/register.js";

/** defines all transformers which will be applied to the web in a consistent way */
StyleDictionary.registerTransformGroup({
	name: "custom/js",
	transforms: [
		"attribute/cti",
		"attribute/color",
		"name/cti/pascal",
		"size/rem",
		"color/hex",
		// custom transformers
		"name/variable/color",
		"ts/color/rgba",
	],
});
