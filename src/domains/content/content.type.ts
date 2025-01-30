import { User } from "../user/user.entity";
import { Content } from "./content.entity";
import { contentSortOption } from "./content.constant";

export interface ContentView extends Omit<Content, 'authorId'> {
    author: User;
}

export type ContentSortOption = (typeof contentSortOption)[keyof typeof contentSortOption];
