export class FfmpegBuilder {
    private inputPath: string;
    private options: Map<string, string> = new Map();
    
    constructor() {
        this.options.set('-c:v', 'libx264');
    }
    
    input(inputPath: string) {
        this.inputPath = inputPath;
        return this;
    }

    setVideoSize(width: number, height: number) {
        this.options.set('-s', `${width}x${height}`);
        return this;
    }

    output(outputPath: string) {
        if (!!this.inputPath) {
            throw new Error('Input path is not set');
        }
        const args: string[] = ['-i', this.inputPath];
        this.options.forEach((value, key) => {
            args.push(key);
            args.push(value);
        });
        args.push(outputPath)
    }
}