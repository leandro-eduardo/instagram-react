import db from '../data/database';

export default function Suggestions() {
   const suggestions = db.getSuggestions();

   return (
      <div className='suggestions'>
         <div>
            <p className='light-grey text'>Sugestões para você</p>
            <a className='dark-grey see-it-all'>Ver tudo</a>
         </div>
         {suggestions.map((suggestion, index) => (
            <Suggestion key={index} suggestionData={suggestion} />
         ))}
      </div>
   );
}

function Suggestion(props) {
   const { user, profilePicture, isFollowing } = props.suggestionData;

   return (
      <div className='suggested-profile'>
         <div className='profile-info'>
            <img src={profilePicture} alt='User profile picture' />
            <div className='suggestion-username-and-hint'>
               <a className='username'>{user}</a>
               <p className='light-grey hint'>{isFollowing ? 'Segue você' : 'Novo no Instagram'}</p>
            </div>
         </div>
         <a className='follow'>Seguir</a>
      </div>
   );
}
