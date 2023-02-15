import db from '../data/database';

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

   return (
      <div className='post'>
         <div className='header'>
            <div className='user'>
               <img src={`assets/img/${user}.svg`} alt={user} />
               {user}
            </div>
            <div className='actions'>
               <ion-icon name='ellipsis-horizontal'></ion-icon>
            </div>
         </div>

         <div className='content'>
            <img src={`assets/img/${image}.svg`} alt={image} />
         </div>

         <div className='footer'>
            <div className='actions'>
               <div>
                  <ion-icon name='heart-outline'></ion-icon>
                  <ion-icon name='chatbubble-outline'></ion-icon>
                  <ion-icon name='paper-plane-outline'></ion-icon>
               </div>
               <div>
                  <ion-icon name='bookmark-outline'></ion-icon>
               </div>
            </div>

            <div className='likes'>
               <img src={`assets/img/${likes.userWhoLiked}.svg`} alt={likes.userWhoLiked} />
               <div className='text'>
                  Curtido por <strong>{likes.userWhoLiked}</strong> e
                  <strong> outras {likes.totalLikes} pessoas</strong>
               </div>
            </div>
         </div>
      </div>
   );
}
