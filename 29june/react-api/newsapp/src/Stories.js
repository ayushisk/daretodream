import React from 'react'
import { useGlobalContext } from './context'

const Stories = () => {
    const {hits, isLoading, removePost} = useGlobalContext();


    if(isLoading){
        return (
            <>
                <h1>Loading....</h1>
            </>
        );
    }

  return (
    <>
        <div className='stories-div'>
            {/* <h2>MY tech news post</h2> */}
            {hits.map((curPost) =>{
                const {title, author, objectID, url, num_comments}= curPost;
                return (
                    // <> removing this react fregment cause to pass the key value in map function for not getting the erro of key and props 
                    <div className='card' key={objectID}>
                        <h2>{title}</h2>
                        <p>
                            By <span> {author} </span>| <span>{num_comments}</span> comments
                        </p>
                        <div className='card-button'>
                            <a href={url} target='_blank'>Read More</a>
                            <a href='#' onClick={() => removePost(objectID)}>Remove</a>
                        </div>
                    </div>
                // </>
                );
            })}
        </div>
        
    </>
  )
}

export default Stories