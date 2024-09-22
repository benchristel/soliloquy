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
        // TODO: bring in whatever lib files are needed from node_modules/typescript/lib/.
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
    // readDirectory?(rootDir: string, extensions: readonly string[], excludes: readonly string[] | undefined, includes: readonly string[], depth?: number | undefined): string[] {
    //     throw new Error("Method not implemented.");
    // }
    // resolveModuleNames?(moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingSourceFile?: SourceFile | undefined): (ResolvedModule | undefined)[] {
    //     throw new Error("Method not implemented.");
    // }
    // getModuleResolutionCache?(): ModuleResolutionCache | undefined {
    //     throw new Error("Method not implemented.");
    // }
    // resolveTypeReferenceDirectives?(typeReferenceDirectiveNames: string[] | readonly FileReference[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingFileMode?: ResolutionMode): (ResolvedTypeReferenceDirective | undefined)[] {
    //     throw new Error("Method not implemented.");
    // }
    // resolveModuleNameLiterals?(moduleLiterals: readonly StringLiteralLike[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingSourceFile: SourceFile, reusedNames: readonly StringLiteralLike[] | undefined): readonly ResolvedModuleWithFailedLookupLocations[] {
    //     throw new Error("Method not implemented.");
    // }
    // resolveTypeReferenceDirectiveReferences?<T extends string | FileReference>(typeDirectiveReferences: readonly T[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions, containingSourceFile: SourceFile | undefined, reusedNames: readonly T[] | undefined): readonly ResolvedTypeReferenceDirectiveWithFailedLookupLocations[] {
    //     throw new Error("Method not implemented.");
    // }
    // getEnvironmentVariable?(name: string): string | undefined {
    //     throw new Error("Method not implemented.");
    // }
    // hasInvalidatedResolutions?(filePath: Path): boolean {
    //     throw new Error("Method not implemented.");
    // }
    // createHash?(data: string): string {
    //     throw new Error("Method not implemented.");
    // }
    // getParsedCommandLine?(fileName: string): ParsedCommandLine | undefined {
    //     throw new Error("Method not implemented.");
    // }
    // jsDocParsingMode?: JSDocParsingMode | undefined;
    fileExists(fileName: string): boolean {
        return false
    }
    readFile(fileName: string): string | undefined {
        throw new Error("readFile not implemented.")
    }
    // trace?(s: string): void {
    //     throw new Error("Method not implemented.");
    // }
    // directoryExists?(directoryName: string): boolean {
    //     throw new Error("Method not implemented.");
    // }
    // realpath?(path: string): string {
    //     throw new Error("Method not implemented.");
    // }
    // getDirectories?(path: string): string[] {
    //     throw new Error("Method not implemented.");
    // }

}
