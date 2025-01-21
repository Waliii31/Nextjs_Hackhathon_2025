// import second from 'first'
import { createClient } from 'next-sanity'

const client = createClient({
    projectId: "64onzlxf",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-10-10"
})

export async function sanityFetch({query, params = {}}: {query: string, params?: any}): Promise<any> {
    return await client.fetch(query, params);
}