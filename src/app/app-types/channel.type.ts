export type Channel = {
    id: string;
    name: string;
    profileId: string;
    verified?: boolean;
    description?: string;
    videoCount?: string;
    subscriberCount?: string;
    members?: Record<string, unknown>;
    uploadedVideos?: Record<string, unknown>;
    savedPlayLists?: Record<string, unknown>;
    createdPlayLists?: Record<string, unknown>;
    image?: {
        avatar?: string;
        banner?: string;
    };
};
