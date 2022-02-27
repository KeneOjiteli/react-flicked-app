import avatar from './images/avatar.jpg';
import '../App.css';
import { Link, useParams, useNavigate } from 'react-router-dom';

//whenever you want to pass a prop, always register it on the representation of the child component on the parent component
const ArticleList = ({title, articles}) => {
    const navigate = useNavigate();
    return (  
        <div className="container mt-3 text-center">
            <h1>{title}</h1>
             <div className="container mt-3">
                 <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                    {articles.map((article) => (
                    <div className="card content  mb-2" key={article.id}>
                    <img src={avatar} className="card-img-top mx-auto mt-2" 
                    alt="Avatar"/>
                    <div className="card-body">
                    <h2 className="card-text">{article.title}</h2>
                    <span>{`Article by ${article.author}`}</span>
                    <div>
                    <Link to={`/details/${article.id}`}>
                    <button className='btn rounded-pill me-1 btn1'>View</button>
                    </Link>
                    </div>
                    </div>
                    </div>
                        ))}
                     </div>
                 </div>
             </div>
            </div>
    );
}
export default ArticleList;