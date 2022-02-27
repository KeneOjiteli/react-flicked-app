 import {useForm } from 'react-hook-form';
 import { useParams, useNavigate, useLocation } from 'react-router-dom';
import useFetch from './useFetch';
import { useState } from 'react';

 function EditArticle() {
    const {id} = useParams();
    const navigate = useNavigate();
    const {state} = useLocation();
    const {data : articles} = useFetch(`https://localhost:7166/api/article/${id}`);
     const {register, handleSubmit, formState: {errors}} = useForm({
         defaultValues: {
             title: state.title,
             body: state.body,
             author: state.author,
             image: state.image
            //takes default value of fields registered with hook-form
         }
     });
     const altname = 'image';
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(false);
     const [imageDetails, setImageDetails] = useState({
        imageName: '',
        // imageSrc: '',
        imageSrc: state.image || '',
        imageSize: '',
        imageFile: null 
     });
     const onSubmit =(data) =>{
        console.log(data);
     }
     
     const handlePreview = (e) =>{
        // checks if file is emmpty & if theres anything in d first index of d files object
        if (e.target.files && e.target.files[0]) {
           let imageFile = e.target.files[0]; 
           let imageName = e.target.files[0].name;
           let imageSize = e.target.files[0].size;
        //    FileReader reads the content of the file/ access d file, it also has 2 mtds:onload,readAsDataURL
           const reader = new FileReader();
           reader.onload = (x) =>{
               setImageDetails({
                //    let imageName from usestate = imageName variable
                   imageName: imageName,
                   imageSrc: x.target.result,
                   imageSize: imageSize,
                   imageFile: imageFile
               })
           }
        //    this completes reading the file successfully ie reads the content of d file
           reader.readAsDataURL(imageFile);
        }
        //returns intial state
        setImageDetails({
            imageName: '',
            imageSrc: '',
            imageSize: '',
            imageFile: null
        })
    }

     const handleEdit = (id, data) =>{
        // const data = {title: '', body: '', author: ''};
        setLoading(true);
        const articleData = new FormData();
        //storing details to db, k/v pair, k shud coincide with data models on backend
        articleData.append('id', data.id)
        articleData.append('title', data.title)
        articleData.append('body', data.body)
        articleData.append('author', data.author)
        //imagename is not gotten from data because it's saved in a state
        articleData.append('imageName', imageDetails.imageName)
        articleData.append('ImageFile', imageDetails.imageFile)
        fetch(`https://localhost:7166/api/article/${state.id}`,
        {
           'method': 'PUT',
            // headers: {'Content-Type': 'application/json'}
        })
        .then(() =>{
            //navigate takes in state object as a parameter that passes values from one cmp to another
            navigate('/home' ,{state: {
                id: articles.id,
                title: articles.title,
                body: articles.body,
                author: articles.author,
                image: articles.imageSrc 
            }});
            // setLoading(false);
        }).catch((error) =>{
            setError(error.message);
            console.log(error.message);
        })
    }
     return ( 
        <div className="container">
        <h1 className="text-center">Edit Article</h1>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-4">
                        <label>Title</label>
                        <input type="text" 
                        className="form-control"
                        {...register("title", {required : true})}/>
                    </div>
                    {errors.title && <p className="text-danger">Title is required</p>}
                    {/* {errors.title && <p className="text-danger">maxlength of 10 chars</p>} */}
                    <div className="form-group mb-4">
                        <label htmlFor="body">Body</label>
                        <textarea
                        className="form-control"
                        {...register("body", {required: true})}></textarea>
                    </div>
                    {errors.body && <p className="text-danger">Body is required</p>}
                    <div className="form-group mb-4">
                        <label htmlFor="author">Author</label>
                        <select 
                        className="form-select"
                        {...register("author")}>
                            <option value="toke">Toke</option>
                            <option value="daniel">Daniel</option>
                            <option value="zanna">Zanna</option>
                        </select>
                    </div>       
                        <img src={imageDetails.imageSrc} alt={altname} className="d-block rounded mb-4"
                          style={{width :'400px', height: '400px'}}/>
                          {/* <img src={state.image} alt="" className='d-block rounded mb-4'
                          style={{width: '400px', height: '400px'}}/> */}
                          <div className="form-group input-group mb-4">
                            <input type="file" 
                            className="form-control" 
                            accept="image/png, image/jpeg"
                            {...register("image", {required: true})}
                            onChange={handlePreview}
                            />
                        </div>
                    <div className="text-center">
                    {/* {loading === true ? <button className="btn">Add Article...</button> : <button className="btn">Add Article</button>}  */}
                    {loading && <button className="btn btn1" onClick={handleEdit}>Editing Article...</button>}
                    {!loading && <button className="btn btn1" onClick={handleEdit}>Edit Article</button>}
                     {/* <button className="btn btn1" >Edit</button> */}
                     {/* onClick={handleEdit} */}
                    </div>
                </form>
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
      );
 }
 
 export default EditArticle;