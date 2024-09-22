import {CompilerHost, CompilerOptions, CreateSourceFileOptions, FileReference, JSDocParsingMode, ModuleResolutionCache, ParsedCommandLine, Path, ResolutionMode, ResolvedModule, ResolvedModuleWithFailedLookupLocations, ResolvedProjectReference, ResolvedTypeReferenceDirective, ResolvedTypeReferenceDirectiveWithFailedLookupLocations, ScriptTarget, SourceFile, StringLiteralLike, WriteFileCallback, createSourceFile, getDefaultLibFilePath} from "typescript"
import {libDeclarations} from "./typescript/lib-declarations/index.js"

export class InMemoryCompilerHost implements CompilerHost {
    constructor(private files: Hash<string>) {}

    getSourceFile(fileName: string, languageVersionOrOptions: ScriptTarget | CreateSourceFileOptions, onError?: ((message: string) => void) | undefined, shouldCreateNewSourceFile?: boolean | undefined): SourceFile | undefined {
        // TODO: figure out how to actually handle lib files
        if (fileName in libDeclarations) {
            return createSourceFile(fileName, libDeclarations[fileName], languageVersionOrOptions)
        }
        return createSourceFile(fileName, this.files[fileName], languageVersionOrOptions)
    }
    getDefaultLibFileName(options: CompilerOptions): string {
        return "lib.d.ts"
    }
    writeFile() {
        throw new Error("writeFile not implemented.")
    }
    getCurrentDirectory(): string {
        return "/current-directory-stub"
    }
    getCanonicalFileName(fileName: string): string {
        return fileName
    }
    useCaseSensitiveFileNames(): boolean {
        return true
    }
    getNewLine(): string {
        throw new Error("getNewLine not implemented.")
    }
    fileExists(fileName: string): boolean {
        return false
    }
    readFile(fileName: string): string | undefined {
        throw new Error("readFile not implemented.")
    }
}
