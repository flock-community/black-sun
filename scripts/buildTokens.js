import { BlackSunDictionary } from "../src/BlackSunDictionary.js";
import config from "../src/config.js";

const debug = Boolean(process.env.DEBUG);

const flockSD = await BlackSunDictionary.extend(config, {
	verbosity: debug ? "verbose" : "default",
	warnings: "warn",
});
await flockSD.hasInitialized;
await flockSD.buildAllPlatforms();
