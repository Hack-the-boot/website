interface LeftUserProps {
    avatar: string;
    children: React.ReactNode;
}
export default function LeftUser({ avatar, children }: LeftUserProps) {
    return (
        <div className="leftUser">
            <div className="avatar">{avatar}</div>
            <div className="userText">{children}</div>
        </div>
    );
}
