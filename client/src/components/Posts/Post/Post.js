import React from 'react'
import {StyledCard,CardActions,Media,Overlay,Overlay2,Details,Title} from './styles'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Typography } from '@mui/material';
import moment from 'moment'

const Post = ({post}) => {
  return (
    <StyledCard>
      <Media image={post.selectedFile} title={post.title}/>

      <Overlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </Overlay>

      <Overlay2>
        <Button style={{color:"white"}} size="small" onClick={()=>{}}>
          <MoreHorizIcon fontSize='default'/>
        </Button>
      </Overlay2>

      <Details>
        <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag}`)}</Typography>
      </Details>
      
      <Title>
        <Typography variant="h5" gutterBottom>{post.message}</Typography>
      </Title>

      <CardActions>

        <Button size='small' color='primary' onClick={()=>{}}>
          <ThumbUpAltIcon fontSize='small' />
          Like
          {post.likeCount}
        </Button>

        <Button size='small' color='primary' onClick={()=>{}}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>

    </StyledCard>
  )
}

export default Post