export default {
    name:'blog',
    title:'Blog',
    type:'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title:'Title of the Blog',
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug of the Blog',
            options: {
                source:'title'
            }
        },
        {
            name:'image',
            type:'image',
            title:'Image of the Blog',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title:'Small Description of the Blog',
        },
       
        {
            name:'content',
            type:'array',
            title:'Content',
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ]
}