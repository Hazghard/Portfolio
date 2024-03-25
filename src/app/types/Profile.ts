import { PortableTextBlock } from "sanity"
import { Social } from "./Social"

export type Profile={
    bio:PortableTextBlock,
    image:string,
    name:string,
    profession:string[],
    smallBio:string,
    socials:Social[],
    _createdAt:Date,
    _id:string,
    _rev:string,
    _type:string,
    _updatedAt:Date
}
