import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';

export async function getSocials() {
    const data = await client.fetch(groq`*[_type == "social"]{...}`);
    return data
}

export async function getProfile() {
    const data = await client.fetch(groq`*[_type == "profile"][0]{
        ...,
        "image":image.asset->url,
        "socials":socials[]->,
    }`);
    return data
}

export async function getFiles() {
    const data = await client.fetch(groq`*[_type == "profile"][0]{
        ...,
        "manuscriptURL": documents[].asset->url
      }`);
    return data.manuscriptURL
}

export async function getSkills() {
    const data = await client.fetch(groq`*[_type == "skill"]{
        ...,
        "image": image.asset->url
      }`);
    return data
}

export async function getProjects() {
    const data = await client.fetch(groq`*[_type == "project"] {
        ...,
        "image": image.asset->url,
        "tech":tech[]-> 
      }`);
    return data
}