import db from '../data/database';

export default function Suggestions() {
   const suggestions = db.getSuggestions();

   return (
      <div className='suggestions'>
         <div className='title'>
            Sugestões para você
            <div>Ver tudo</div>
         </div>
         {suggestions.map((suggestion, index) => (
            <Suggestion key={index} suggestionData={suggestion} />
         ))}
      </div>
   );
}

function Suggestion(props) {
   const { user, isFollowing } = props.suggestionData;

   return (
      <div className='suggestion'>
         <div className='user'>
            <img src={`assets/img/${user}.svg`} alt={user} />
            <div className='text'>
               <div className='user'>{user}</div>
               <div className='reason'>{isFollowing ? 'Segue você' : 'Novo no Instagram'}</div>
            </div>
         </div>

         <div className='follow'>Seguir</div>
      </div>
   );
}
