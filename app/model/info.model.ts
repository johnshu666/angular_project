import { Profile } from '../profile.model';

export interface Information {
    slug: string;
    name: string;
    age: number;
    school: string;
    address: string;
    selfIntro: string;
    preference: string;
    sexualType: string;
    infomaker: Profile;
}

