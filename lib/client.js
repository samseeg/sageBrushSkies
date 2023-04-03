import sanityClient from '@sanity/client';
import  createImageUrlBuilder  from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'vcepn1e0',
    dataset: 'production',
    apiVersion: '2023-04-02',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);