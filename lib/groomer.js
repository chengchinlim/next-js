
export function getAllIds() {
    const ids = [
        'cheng', 'kim'
    ]
    return ids.map(id => {
        return {
            params: {
                id: id
            }
        }
    })
}


export function getOneData(id) {
    return id
}