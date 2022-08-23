export type Category = {
    _id: string;
    name: string;
    slug: string;
    imageURL: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
}

export type User = {
    _id: string;
    name?: string;
    email: string;
    username: string;
    role: string;
    about?: string;
    avatar?: string;
    access_token: string;
    createdAt?: string;
    updatedAt?: string;
}