import path from "path";
import url from "url";

// Paths
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
export const TOKENS_ROOT_DIR = path.resolve(__dirname, "./tokens/");
export const TOKENS_FILE_PATH = path.resolve(TOKENS_ROOT_DIR, "**/*.json");
export const BUILD_PATH = path.join(__dirname, "build/");
export const BUILD_PATH_INFIMA = path.join(BUILD_PATH, "infima/");
export const BUILD_PATH_JS = path.join(BUILD_PATH, "js/");
