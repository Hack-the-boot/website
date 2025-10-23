type CardInfoProps = {
    title?: string;
    subtitle?: string;
    items?: string[];
    img?: string;
};

export default function CardInfo({ title, subtitle, items, img }: CardInfoProps) {
    return (
        <div className="card-info">
            <img src={img} alt="" className="w-23 h-23  absolute top-[-50px]" />
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <ul>
                {items?.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
