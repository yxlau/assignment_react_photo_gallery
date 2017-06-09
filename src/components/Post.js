import React from 'react'
import Tags from './elements/Tags'
import {dateString} from '../helpers/dateString'

const Panel = ({image}) => {
  const {
    user: {
      profile_picture: profile_pic,
      username
    },
    images: {
      standard_resolution: {
        url: imgUrl,
        width: imgWidth,
        height: imgHeight
      }
    },
    link,
    tags,
    filter,
    created_time,
    likes: {
      count: likeCount
    },
    comments: {
      count: commentCount
    }

  } = image

  return (
    <article className="post">
      <header className="post-header">
        <a href={`https://www.instagram.com/${username}`} className="image"><img src={profile_pic} width="30" height="30" alt=""/></a>
        <h1 className="title">
          <a href={`https://www.instagram.com/${username}`}>{username}</a>
        </h1>
      </header>
      <section className="post-body">
        <a href={link}><img src={imgUrl} alt="" className="image" width={imgWidth} height={imgHeight}/></a>
        <p className="post-meta">Likes {likeCount}
          / Comments {commentCount}</p>
        <p className="post-meta"><Tags tags={tags}/></p>
        <p className="post-meta">{`Filter: ${filter}`}</p>
        <p className="post-datetime">{dateString(created_time)}</p>
      </section>

    </article>

  )

}

export default Panel
