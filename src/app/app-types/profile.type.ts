export type Profile = {
    id: string;
    name: string;
    premiumActive?: string;
    channels?: Record<string, unknown>;
    comments?: Record<string, unknown>;
    likedVideos?: Record<string, unknown>;
    watchedVideos?: Record<string, unknown>;
    subscriptions?: Record<string, unknown>;
    downloadedVideos?: Record<string, unknown>;
    watchListedVideos?: Record<string, unknown>;
    image?: {
        avatar?: string;
        banner?: string;
    };
    preferences?: {
        language?: string;
        location?: string;
        restrictedMode?: boolean;
        appearance?: 'light' | 'dark' | 'system' | 'default';
    };
    socialLinks?: {
        twitch?: string;
        twitter?: string;
        facebook?: string;
        instagram?: string;
    };
};
