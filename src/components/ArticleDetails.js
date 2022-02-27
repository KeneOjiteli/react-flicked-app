import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
import '../App.css';

function ArticleDetails() {

    const {id} = useParams();
    const navigate = useNavigate();
    const {data : articles, loading, error} = useFetch(`https://localhost:7166/api/article/${id}`);
    
    const handleDelete = (id) =>{
        fetch(`https://localhost:7166/api/article/${id}`,{
            'method': 'DELETE',
            // headers: {'Content-Type': 'application/json'},
        })
        .then(() => {
            navigate('/home');
            console.log('Article deleted successfully');
        })
        .catch((error) =>{
            console.log(error);
        })
        }

        const handleEdit = (id) =>{
            //navigate takes in state object as a parameter that passes values from one cmp to another
            navigate(`/edit/${id}`,{state: {
                            id: articles.id,
                            title: articles.title,
                            body: articles.body,
                            author: articles.author,
                            image: articles.imageSrc 
                        }});
        }
  
    return (
        <div className="container">
            {loading && <div>Loading...</div>}
            {error && <p>{error}</p>}
            {articles && (
            <article>
                <h2 className='pb-2 fw-bold'>{articles.title}</h2>
                <h3 className='pb-2'>Author: {articles.author}</h3>
                <h4 className='pb-2'>{articles.body}</h4>
                {/* {articles.imageSrc ? <img src={articles.imageSrc} alt="Image" className="d-block rounded mb-4"
                style={{width :'400px', height: '400px'}}/> : null} */}
                <img src={articles.imageSrc} alt="Image" className="d-block rounded mb-4"
                style={{width :'400px', height: '400px'}}/>
                <button className="btn btn1 me-3" onClick={() =>{handleDelete(articles.id)}}>Delete article</button>
                <button className='btn btn1' onClick={() =>{handleEdit(articles.id)}}>Edit article</button>
                </article>
                // me - margin-end.....shifts elements to the right
            )} 
        </div>
      );
}

export default ArticleDetails;