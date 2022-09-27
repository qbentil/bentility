import { Post } from "../types";

const percentToHex = (p:number) => {
    const percent = Math.max(0, Math.min(100, p)); // bound percent from 0 to 100
    const intValue = Math.round(percent / 100 * 255); // map percent to nearest integer (0 - 255)
    const hexValue = intValue.toString(16); // get hexadecimal representation
    return hexValue.padStart(2, '0').toUpperCase(); // format with leading 0 and upper case characters
}

export const ColorOpacity = (color: string, percent: number) => {
    return `${color}${percentToHex(percent)}`;
}

export const CategoryPostCount = (category:string, posts:Post[]) => {
    return posts.filter(post => post.categories.includes(category)).length;
}

export const generateInitials = (name:string) => {
    const names = name.split(' ');
    const init =  names.length > 1? names[0].charAt(0) + names[names.length - 1].charAt(0) : names[0].charAt(0) + names[0].charAt(1);
    return init.toUpperCase();
}

export const convertDate = (word: string, type?:any) => {
    const date = new Date(word)
    const month = date.toLocaleString('default', { month: type || 'long' })
    const day = date.getDate()
    const year = date.getFullYear()
    const formattedDate = `${day} ${month}, ${year}`
    return formattedDate
}

export const TotalViewsCount = (posts:any) => {
    return posts.reduce((acc: number, post:any) => acc + post?.views, 0);
}