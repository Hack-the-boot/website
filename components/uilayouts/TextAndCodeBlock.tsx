import CodeBlock from "../CodeBlock";

type Props = {
    title: string;
    code: string;
};
export default function TextAndCodeBlock({ title, code }: Props) {
    return (
        <div className="text-and-code-block">
            <h3>{title}</h3>
            <CodeBlock text={code}></CodeBlock>
        </div>
    );
}
