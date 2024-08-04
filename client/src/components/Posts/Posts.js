import React from 'react'
import Post from './Post/Post'
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { MainContainer, SmMargin, ActionDiv} from './styles';

const Posts = () => {
    const posts = useSelector((state)=> state.posts);

    return (
        !posts.length ?<CircularProgress /> :(
            <MainContainer container alignItems="stretch" spacing={3}>
                {
                    posts.map((post)=>(
                        <MainContainer key={post._id} xs={12} sm={6} item>
                            <Post post={post}/>
                        </MainContainer>
                    ))
                }
            </MainContainer>
        )
    )
}

export default Posts