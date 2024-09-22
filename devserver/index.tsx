import {render, h} from "preact"

render(<Main />, document.getElementById("preact-root")!)

function Main() {
    return <h1>Hello, world!</h1>
}
