import { SourceFile } from "typescript";

const lengthOfFirstArgument = (sourceFile: SourceFile): number => {
    const stmLen = sourceFile.statements.length; // statements length to get the last statement (which should be the function call)
    //@ts-ignore: 
    return sourceFile.statements[stmLen-1].expression.arguments[0].elements ? sourceFile.statements[stmLen-1].expression.arguments[0].elements.length : +sourceFile.statements[stmLen-1].expression.arguments[0].expression.expression.arguments[0].text
};

export default lengthOfFirstArgument;