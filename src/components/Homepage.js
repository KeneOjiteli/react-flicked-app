import useFetch from './useFetch';
import ArticleList from './ArticleList';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Homepage = ()  => {
    const {data : articles, loading, error, handleDelete} = useFetch('https://localhost:7166/api/article');
    const title = 'All articles!';
    const {details} = useSelector((currentState) => currentState.registration);
    const [firstName, setfirstName] = useState(details.firstname);
    const [lastName, setLastName] = useState(details.lastname);

   return ( 
        <div className="container">
            {/* always register prop on representation of child component */}
            {/* react conditional templating ie render articlelist once we have article data*/}
            {firstName && <p className='fw-bold'>Hello, {firstName} {lastName}</p>}
            {loading && <div>Loading...</div>}
            {error && <p>{error}</p>}
            {articles && <ArticleList title={title} articles={articles} handleDelete={handleDelete}/>} 
            {/* {articles && <ArticleDetails handleDelete={handleDelete}/>} */}
        </div>
     );
}

export default Homepage;