export interface Info {
    name: string;
    age: number;
    school: string;
    address: string;
    selfIntro: string;
    preference: string;
    sexualType: string;

    filters: {
        limit?: number,
        offset?: number
    };
}
