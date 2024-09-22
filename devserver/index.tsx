import {render, h} from "preact"
import {Project} from "../src/project.js"
import {trimMargin} from "@benchristel/taste"

const project = new Project({
    "index.ts": trimMargin`
        const message: number = "Hello, world!"
        console.log(message)
    `,
})

const errors = project.getTypeErrors()

render(<Main />, document.getElementById("preact-root")!)

function Main() {
    return <pre>{JSON.stringify(errors, null, 4)}</pre>
}
