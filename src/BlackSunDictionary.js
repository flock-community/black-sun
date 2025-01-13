import StyleDictionary from "style-dictionary";
import { customFileHeader } from "./formats/file-headers/index.js";
import {
	infimaTransformGroup,
	javascriptTransformGroup,
} from "./transform-group/index.js";
import {
	nameVariableColorTransformer,
	nameVariableDefaultTransformer,
	valueColorRgbaTransformer,
} from "./transforms/index.js";

/**
 *
 */
export const BlackSunDictionary = new StyleDictionary();

// Actions

// Formats

// FileHeaders
BlackSunDictionary.registerFileHeader(customFileHeader);

// Parser

// Preprocessors

// Transformers
BlackSunDictionary.registerTransform(nameVariableColorTransformer);
BlackSunDictionary.registerTransform(nameVariableDefaultTransformer);
BlackSunDictionary.registerTransform(valueColorRgbaTransformer);

// Transform Groups
BlackSunDictionary.registerTransformGroup(infimaTransformGroup);
BlackSunDictionary.registerTransformGroup(javascriptTransformGroup);
