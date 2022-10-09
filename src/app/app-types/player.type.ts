export type Player = {
    id: string;
    text: string;
    videoId: string;
    postedBy?: {
        id?: string;
        name?: string;
        image?: string;
    };
    commentAge?: string;
    replyCount?: number;
    likeCount?: number;
    dislikeCount?: number;
    replies?: Comment;
};
