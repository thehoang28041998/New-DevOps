export interface UnityBuildConfiguration {

    /**
     * The target build platform for the build output.
     */
    buildTarget: string;

    /**
     * Path to the Unity project to build, relative to repository root.
     * If empty or undefined, defaults to repository root.
     */
    projectPath: string;

    /**
     * Build output path. This can be relative to repository root or fully qualified.
     * If empty or undefined, defaults to repository root.
     */
    outputPath: string;

    /**
     * Output filename, used e.g as drop.exe, drop.app, drop.apk.
     */
    outputFileName: string;
}