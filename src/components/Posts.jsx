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
   const { user, image, likes } = props.postData;
   const [isLiked, setIsLiked] = useState(false);
   const [totalLikes, setTotalLikes] = useState(likes.totalLikes);
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

   return (
      <div className='post'>
         <div className='header'>
            <div className='user'>
               <img src={`assets/img/${user}.svg`} alt={user} />
               {user}
            </div>
            <div className='actions'>
               <ion-icon name='ellipsis-horizontal' />
            </div>
         </div>

         <div className='content'>
            {likeAnimation && <ion-icon name='heart' class='white-heart scale-up-center' />}
            <img src={`assets/img/${image}.svg`} alt={image} onDoubleClick={handleLikeByPostImage} />
         </div>

         <div className='footer'>
            <div className='actions'>
               <div>
                  <ion-icon
                     name={isLiked ? 'heart' : 'heart-outline'}
                     class={isLiked ? 'liked' : ''}
                     onClick={handleLikePost}
                  />
                  <ion-icon name='chatbubble-outline' />
                  <ion-icon name='paper-plane-outline' />
               </div>
               <div>
                  <ion-icon name='bookmark-outline' />
               </div>
            </div>

            <div className='likes'>
               <img src={`assets/img/${likes.userWhoLiked}.svg`} alt={likes.userWhoLiked} />
               <div className='text'>
                  Curtido por <strong>{likes.userWhoLiked}</strong> e
                  <strong> outras {totalLikes} pessoas</strong>
               </div>
            </div>
         </div>
      </div>
   );
}
