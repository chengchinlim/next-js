
export default function Test({ data }) {
    return (
        <div>
            Hello from {data.name} - {data.age} years old
        </div>
    )
}

export async function getStaticProps() {
    const testPromise = () => new Promise((resolve => {
        setTimeout(() => {
            resolve({
                name: 'Cheng',
                age: 23
            })
        }, 3000)
    }))
    const data = await testPromise()
    return {
        props: {
            data
        }
    }
}