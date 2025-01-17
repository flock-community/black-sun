import { expect } from "chai";
import { getMockToken } from "../../tests/getMocks.js";
import { _transform as transform } from "./valueColorRgba.js";

describe("[transforms] value transformer valueColorRgba", () => {
	it("should transform rgba color tokens to use CSS color-mix", () => {
		const token = getMockToken({
			name: "CeruleanBlue",
			original: { value: "rgba(${color}, ${opacity})" },
		});

		expect(transform(token, {}, {})).to.equal(
			"color-mix(in srgb, ${color} ${opacity}, ${color} 0%)",
		);
	});

	it(`should not change color tokens which value doesn't contain rgba values`, () => {
		const token = getMockToken({
			name: "CeruleanBlue",
			original: { value: "#2a52BE" },
		});

		expect(transform(token, {}, {})).to.equal("transformedValue");
	});
});
