interface RightUserProps {
    avatar: string;
    children: React.ReactNode;
}
export default function RightUser({ avatar, children }: RightUserProps) {
    return (
        <div className="rightUser">
            <div className="userText">{children}</div>
            <div className="avatar">{avatar}</div>
        </div>
    );
}
