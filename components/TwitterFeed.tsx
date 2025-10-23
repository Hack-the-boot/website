import React from "react";

const TwitterFeed = () => {
    const tweets = [
        {
            name: "Sarah Chen",
            handle: "@sarahcodes",
            avatar: "SC",
            gradient: "gradient-blue",
            time: "2h ago",
            text: "Just submitted my application for Hack The Boot! 🚀 Can't wait to meet amazing people and build something incredible in Milan!",
            likes: 24,
            retweets: 8,
        },
        {
            name: "Marco Rossi",
            handle: "@marcodev",
            avatar: "MR",
            gradient: "gradient-purple",
            time: "4h ago",
            text: "Priority round application submitted ✅ Super excited about this! First international hackathon in Italy at Politecnico di Milano? Count me in!",
            likes: 31,
            retweets: 12,
        },
        {
            name: "Emma Johnson",
            handle: "@emmaj_tech",
            avatar: "EJ",
            gradient: "gradient-green",
            time: "6h ago",
            text: "Heard about Hack The Boot from a friend and immediately applied. 24 hours of coding with hackers from around the world? Yes please! 🔥",
            likes: 19,
            retweets: 5,
        },
        {
            name: "Luca Ferrari",
            handle: "@lucabuilds",
            avatar: "LF",
            gradient: "gradient-orange",
            time: "8h ago",
            text: "Application sent! 🎉 Been waiting for something like this in Italy. Spring 2026 can't come soon enough!",
            likes: 42,
            retweets: 15,
        },
        {
            name: "Aisha Patel",
            handle: "@aisha_creates",
            avatar: "AP",
            gradient: "gradient-pink",
            time: "10h ago",
            text: "Just found out about Hack The Boot and WOW. The speaker lineup alone is worth it. Applied immediately! 💪",
            likes: 27,
            retweets: 9,
        },
        {
            name: "Diego Silva",
            handle: "@diegodev",
            avatar: "DS",
            gradient: "gradient-cyan",
            time: "12h ago",
            text: "Priority application done ✨ Already thinking about project ideas. Who wants to team up? #HackTheBoot",
            likes: 38,
            retweets: 11,
        },
    ];

    return (
        <div className="twitterFeed">
            <div className="feedHeader">
                <svg className="feedIcon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <h3 className="feedTitle">Live Buzz</h3>
            </div>

            <div className="feedContent">
                {tweets.map((tweet, index) => (
                    <div key={index} className="tweetCard">
                        <div className="tweetHeader">
                            <div className={`tweetAvatar ${tweet.gradient}`}>{tweet.avatar}</div>

                            <div className="tweetContent">
                                <div className="tweetUserInfo">
                                    <span className="tweetName">{tweet.name}</span>
                                    <span className="tweetHandle">{tweet.handle}</span>
                                    <span className="tweetTime">· {tweet.time}</span>
                                </div>

                                <p className="tweetText">{tweet.text}</p>

                                <div className="tweetActions">
                                    <div className="tweetAction">
                                        <svg className="tweetActionIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <span>{Math.floor(tweet.likes / 2)}</span>
                                    </div>

                                    <div className="tweetAction">
                                        <svg className="tweetActionIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        <span>{tweet.retweets}</span>
                                    </div>

                                    <div className="tweetAction">
                                        <svg className="tweetActionIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <span>{tweet.likes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TwitterFeed;
