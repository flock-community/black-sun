import StyleDictionary from "style-dictionary";
import config from "./config.js";
import "./transforms/groups/js/register.js";

/** creates the dictionary with the config provided for the entire tokens package */
const dictionary = StyleDictionary.extend(config);
dictionary.buildAllPlatforms();
