type SpeakerCardProps = {
    img: string;
    name: string;
    roleAndCompany: string;
    description?: string;
    skills: string[];
    socialLinks: { platform: string; url: string }[];
};

export default function SpeakerCard({ img, name, roleAndCompany, description, skills, socialLinks }: SpeakerCardProps) {
    return (
        <div className="speaker-card">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p className="roleAndCompany">{roleAndCompany}</p>
            <div className="skillContainer">
                {skills.map((skill) => (
                    <span key={skill} className="skillPill">
                        {skill}
                    </span>
                ))}
            </div>
            <p className="speakerDescription">{description}</p>
            <div className="social-links">
                {socialLinks.map((link) => (
                    <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.platform}
                    </a>
                ))}
                <div className="flex items-center justify-center gap-6 mt-6 text-white">
                    {/* LinkedIn */}
                    <div className="p-3 rounded-full border border-white/20 hover:border-white/40 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.77 0 5-2.24 5-5v-14c0-2.76-2.23-5-5-5zm-11.4 20h-2.6v-11h2.6v11zm-1.3-12.4c-.83 0-1.5-.68-1.5-1.5 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .82-.67 1.5-1.5 1.5zm13.7 12.4h-2.6v-5.6c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.15 1.46-2.15 2.96v5.69h-2.6v-11h2.5v1.5h.04c.35-.66 1.21-1.36 2.5-1.36 2.67 0 3.16 1.76 3.16 4.05v6.81z" />
                        </svg>
                    </div>

                    {/* X / Twitter */}
                    <div className="p-3 rounded-full border border-white/20 hover:border-white/40 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                            <path d="M22.162 0h-3.771l-6.292 9.293L5.4 0H0l7.916 11.707L0 24h3.771l6.681-9.864L18.6 24H24l-8.211-12.293L24 0h-1.838zm-6.686 14.136-1.36-2.02L6.34 2.278h2.9l5.362 8.005 1.33 1.986 7.07 10.388h-2.9l-5.326-7.521z" />
                        </svg>
                    </div>

                    {/* Instagram */}
                    <div className="p-3 rounded-full border border-white/20 hover:border-white/40 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 15a3.5 3.5 0 0 0 0-7zm4.75-.88a.88.88 0 1 1 0 1.75.88.88 0 0 1 0-1.75z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="speaker-image-container"></div>
        </div>
    );
}
