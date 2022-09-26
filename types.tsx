export type Category = {
    _id?: string;
    title: string;
    slug: string;
    imageURL?: string;
    description: string;
    color?: string;
    createdAt?: string;
    updatedAt?: string;
}

export type Post = {
    _id?: string;
    title: string;
    slug: string;
    content: string;
    categories: string[];
    views?: number;
    writer?: string;
    isPublished?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export type User = {
    _id?: string;
    name?: string;
    email: string;
    username: string;
    role: string;
    about?: string;
    avatar?: string;
    access_token?: string;
    createdAt?: string;
    updatedAt?: string;
}

export type Button = {
    text: string;
    icon?: JSX.Element;
    disabled?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    shape?: "rounded-full" | "rounded-md" | "rounded-sm";
    
}

export type UtilButton = {
    icon: JSX.Element;
    color: string;
    onClick?: () => void;
}