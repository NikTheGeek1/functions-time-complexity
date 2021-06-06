import { SourceFile } from "typescript";

const lengthOfFirstArgument = (sourceFile: SourceFile): number => {
    //@ts-ignore: 
    return sourceFile.statements[1].expression.arguments[0].elements.length;
};

export default lengthOfFirstArgument;