type CardTimeLineProps = {
    date: string;
    title: string;
    subtitle: string;
    daysRemaining: number;
    alignment?: "start" | "end";
};

export default function CardTimeLine({ date, title, subtitle, daysRemaining, alignment = "start" }: CardTimeLineProps) {
    return (
        <div className={`cardTimeLine flex flex-col ${alignment === "end" ? "items-end text-right" : "items-start text-left"}`}>
            <span className="timelineDate text-gray-400 text-sm">{date}</span>
            <h4 className="cardTimeTitle font-semibold text-lg mt-1">{title}</h4>
            <p className="cardTimeSubtitle text-gray-300 text-base">{subtitle}</p>
            <p className="cardTimeDaysRemaining text-blue-500 font-medium mt-2">{daysRemaining} days remaining</p>
        </div>
    );
}
