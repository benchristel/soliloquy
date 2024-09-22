import {test, expect, equals} from "@benchristel/taste"
import {Project} from "./project.js"

test("a Project", {
    "without type errors"() {
        const project = new Project({
            "index.ts": `console.log("Hello")`,
        })

        const errors = project.getTypeErrors()

        expect(errors, equals, [])
    },

    "with type errors"() {
        const project = new Project({
            "index.ts": `export const x: number = "Hello"`,
        })

        const errors = project.getTypeErrors()

        expect(errors, equals, [{
            text: "Type 'string' is not assignable to type 'number'.",
            fileName: "index.ts",
            start: 13,
            length: 1,
        }])
    },
})
