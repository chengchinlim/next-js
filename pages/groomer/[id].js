import {getAllIds, getOneData} from "../../lib/groomer";

export default function Person({ data }) {
    return (
        <div>
            Id: {data}
        </div>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const data = getOneData(params.id)
    return {
        props: {
            data
        }
    }
}