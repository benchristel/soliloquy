import {getPreEmitDiagnostics, ModuleKind, createProgram} from "typescript"
import {InMemoryCompilerHost} from "./in-memory-compiler-host.js"

type Hash<T> = Record<string, T>

export class Project {
    constructor(private files: Hash<string>) {}

    getTypeErrors() {
        const program = createProgram({
            rootNames: ["index.ts"],
            options: {strict: true, module: ModuleKind.ESNext},
            host: new InMemoryCompilerHost(this.files),
        })

        return getPreEmitDiagnostics(program).map((diagnostic) => ({
            text: diagnostic.messageText,
            start: diagnostic.start,
            length: diagnostic.length,
            fileName: diagnostic.file?.fileName,
        }))
    }
}
