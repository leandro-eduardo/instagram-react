import { useState } from 'react';
import db from '../data/database';

const ANIMATION_DELAY = 500;

export default function Posts() {
   const posts = db.getPosts();

   return (
      <div className='posts'>
         {posts.map((post, index) => (
            <Post key={index} postData={post} />
         ))}
      </div>
   );
}

function Post(props) {
   const { user, profilePicture, postContent, type, likes, comments, totalComments, daysAgo } =
      props.postData;
   const [isLiked, setIsLiked] = useState(false);
   const [totalLikes, setTotalLikes] = useState(likes.totalLikes);
   const [isSaved, setIsSaved] = useState(false);
   const [likeAnimation, setLikeAnimation] = useState(false);

   function handleLikePost() {
      if (isLiked) {
         setTotalLikes(totalLikes - 1);
      } else {
         setTotalLikes(totalLikes + 1);
      }
      setIsLiked(!isLiked);
   }

   function handleLikeByPostImage() {
      if (!isLiked) {
         setLikeAnimation(true);
         setTimeout(() => {
            setLikeAnimation(false);
         }, ANIMATION_DELAY);
         setIsLiked(true);
         setTotalLikes(totalLikes + 1);
      }
   }

   function handleSavePost() {
      setIsSaved(!isSaved);
   }

   return (
      <div className='post'>
         <div className='post-header'>
            <a className='profile-info'>
               <img src={profilePicture} alt={user} />
               <p className='username'>{user}</p>
            </a>
            <ion-icon name='ellipsis-horizontal' />
         </div>
         <div className='post-item'>
            {type === 'image' ? (
               <>
                  {likeAnimation && <ion-icon name='heart' class='white-heart scale-up-center' />}
                  <img src={postContent} alt='Post Content' onDoubleClick={handleLikeByPostImage} />
               </>
            ) : (
               <video controls muted autoPlay>
                  <source src={postContent} type='video/mp4'></source>
                  <source src={postContent} type='video/ogg'></source>
               </video>
            )}
         </div>
         <div className='post-interaction'>
            <div className='post-interaction-icons'>
               <div>
                  <ion-icon
                     name={isLiked ? 'heart' : 'heart-outline'}
                     class={isLiked ? 'liked' : ''}
                     onClick={handleLikePost}
                  />
                  <ion-icon name='chatbubble-outline' />
                  <ion-icon name='paper-plane-outline' />
               </div>
               <ion-icon name={isSaved ? 'bookmark' : 'bookmark-outline'} onClick={handleSavePost} />
            </div>

            <div className='post-likes'>
               <img src={likes.profilePicture} alt={likes.user} />
               <p>
                  Curtido por <span className='bold'>{likes.user}</span> e outras
                  <a className='bold'> {totalLikes} pessoas</a>
               </p>
            </div>
            {totalComments > 5 && (
               <div className='view-more-comments'>
                  <a>Ver todos os {totalComments} comentários</a>
               </div>
            )}

            {comments.length !== 0 && (
               <div className='comments-section'>
                  {comments.map((comment, index) => (
                     <div key={index} className='comment'>
                        <p>
                           <a className='bold'>{comment.user} </a>
                           {comment.text}
                        </p>
                        <ion-icon name='heart-outline' />
                     </div>
                  ))}
               </div>
            )}

            {daysAgo > 0 && (
               <div className='post-time-ago'>
                  <p>HÁ {daysAgo} DIAS</p>
               </div>
            )}
         </div>
         <div className='add-comment'>
            <ion-icon name='happy-outline' />
            <textarea name='add-comment' id='add-comment' placeholder='Adicione um comentário...' />
            <button>Publicar</button>
         </div>
      </div>
   );
}
