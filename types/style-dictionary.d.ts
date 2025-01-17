import type {
	FileHeader as _FileHeader,
	NameTransform as _NameTransform,
	Transform as _Transform,
	TransformedToken as _TransformedToken,
} from "style-dictionary/types";

declare global {
	export {
		_FileHeader as FileHeader,
		_NameTransform as NameTransform,
		_Transform as Transform,
		_TransformedToken as TransformedToken,
	};
}
