type CodeBlockProps = {
    text: string;
};

const CodeBlock = ({ text }: CodeBlockProps) => {
    return <div className="code-block">{text}</div>;
};
export default CodeBlock;
