import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import '../App.css';

function CreateArticle() {
    const [loading, setLoading] = useState(false);
    const [imageDetails, setImageDetails] = useState({
       imageName: '',
       imageSrc: '',
       imageSize: '',
       imageFile: null 
    })
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        setLoading(true);
        //the server accepts only json format
        // const details = JSON.stringify(data);
        //formdata also acts as json.stringify and determines the header props
        const articleData = new FormData();
        //storing details to db, k/v pair, k shud coincide with data models on backend
        articleData.append('title', data.title)
        articleData.append('body', data.body)
        articleData.append('author', data.author)
        //imagename is not gotten from data because it's saved in a state
        articleData.append('imageName', imageDetails.imageName)
        articleData.append('ImageFile', imageDetails.imageFile)
        //diff ports brings up a cors issue, install cors from Nuget
        fetch('https://localhost:7166/api/article', {
            'method': 'POST',
            //  headers: {'Content-Type': 'application/json'},
             body: articleData
        })
        .then(() =>{ 
            console.log('data was saved successfully');
            navigate('/home');
            setLoading(false);
        }).catch((error) =>{
            console.log(error.message);
        })
    }
    //create a fxn to diplay image, every input field on the dom starts with e
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
    // console.log(imageDetails.imageSize, imageDetails.imageName);
    
    const {register, handleSubmit, formState: {errors}} = useForm();
    return (
        <div className="container">
            <h1 className="text-center">Create New Article</h1>
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
                        {/* {imageDetails.imageSrc ?
                        <img src={imageDetails.imageSrc} alt="Image" 
                        className="d-block rounded mx-auto image mb-4" 
                        /> : null} */}
                        {/* to preview image */}
                        {imageDetails.imageSrc && <img src={imageDetails.imageSrc} alt="Image" 
                        className="d-block rounded mx-auto image mb-4" 
                        title={imageDetails.imageName}
                         />}
                        <div className="form-group input-group mb-4">
                            <input type="file" 
                            className="form-control" 
                            accept="image/png, image/jpeg"
                            {...register("image", {required: true})}
                            onChange={handlePreview}
                            multiple/>
                        </div>
                        <div className="text-center">
                        {/* {loading === true ? <button className="btn">Add Article...</button> : <button className="btn">Add Article</button>}  */}
                        {loading && <button className="btn btn1">Add Article...</button>}
                        {!loading && <button className="btn btn1">Add Article</button>}
                        </div>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
      );
}

export default CreateArticle;
