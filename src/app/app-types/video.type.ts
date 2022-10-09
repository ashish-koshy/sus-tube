import { Channel } from './channel.type';

export type Video = {
    id: string;
    title: string;
    channel: Channel;
    duration?: string;
    viewCount?: string;
    likeCount?: number;
    uploadDate?: string;
    description?: string;
    dislikeCount?: number;
    commentCount?: string;
    tags?: Record<string, unknown>;
    preview?: Record<string, unknown>;
    comments?: Record<string, unknown>;
    thumbnails?: Record<string, unknown>;
    trendingTags?: Record<string, unknown>;
    tagSuggestions?: Record<string, unknown>;
    videoSuggestions?: Record<string, unknown>;
    live?: {
        active: boolean;
        viewerCount: boolean;
        lastStreamTimeStamp: string;
    };
};
