import React from 'react';


const commentsData = [

    {
        name: 'Atharva Shelke',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iure.',
        replies: [

            {
                name: 'Atharva Shelke',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iure.',
                replies: []
            },


        ]
    },
    {
        name: 'Atharva Shelke',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iure.',
        replies: [

        ]
    },
    {
        name: 'Atharva Shelke',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iure.',
        replies: [

        ]
    },
];


const Comment = ({ data }) => {

    const { name, text, replies } = data;

    return <div className='flex my-3 bg-gray-200 shadow-lg p-2 rounded-md'>
        <img className='w-12 h-12' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
}


const CommentsList = ({ comments }) => {

    return comments.map((comment, index) =>
        <div>
            <Comment key={index} data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies} />
            </div>
        </div>

    );

}



const CommentsContainer = () => {
    return (
        <div className='ml-20 p-2'>
            <h1 className='text-2xl font-semibold'>Comments</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
        ;

}

export default CommentsContainer
