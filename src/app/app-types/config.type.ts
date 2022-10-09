export type Config = {
    defaultLanguage?: string;
    preferredLanguage?: string;
};

export const defaultConfig: Config = {
    defaultLanguage: 'English',
    preferredLanguage: '',
};
