export const helloRoute = {
    method: 'get',
    path: '/hello',
    handler: (req, res) => {
        res.send("hello from route")
    }
}