export type Search = {
    query?: string;
    results?: {
        videos?: Record<string, unknown>;
        channels?: Record<string, unknown>;
    };
    filters?: {
        TYPE: ['Video', 'Channel', 'Playlist', 'Movie'];
        'SORT BY': ['Upload date', 'View count', 'Rating'];
        DURATION: ['Under 4 minutes', '4 - 20 minutes', 'Over 20 minutes'];
        'UPLOAD DATE': [
            'Last Hour',
            'Today',
            'This Week',
            'This month',
            'This Year'
        ];
        FEATURES: [
            'Live',
            '4K',
            'HD',
            'Subtitles/CC',
            'Creative Commons',
            '360°',
            'VR180',
            '3D',
            'HDR',
            'Location',
            'Purchased'
        ];
    };
};
