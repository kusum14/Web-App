import React, { useState, useEffect } from 'react';
import { NavLink, useParams} from 'react-router-dom';
import { baseUrl, axiosHeaders } from '../../utils/constants';
import axios from 'axios';
import './Details.css';

export default function DetailsPage() {
    const params = useParams();

    const [movieData, setMovieDetails]=useState([]);
    const uri = `${baseUrl}omdb/imdb/${params.imdbID}`;


    useEffect(()=>{
        axios.get(uri,axiosHeaders)
        .then(res =>//setMovieDetails(res.data))
        {
        console.log(res.data);
        setMovieDetails(res.data);
        })
        .catch(error=>{console.log(error)
    })
},[uri]);

    /**
     * Call server with imdbID
     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
     * const imdbID = params.imdbID;
     */
    return (
       <><body>
<h2 className="mb-4">{movieData.Title}</h2>       
               <p> {movieData.Plot}</p>
               <hr/>
       <div className="row">
       
           <div className="col-md-4 text-center">
               <img src={movieData.Poster} className="thumbnail" id="center" alt="Poster"/>
           </div>
           <div className="col-md-4">
           
              
               <ul className="list-group">
                   <li className="list-group-item"><strong>Genre : </strong>{movieData.Genre}</li>
                   <li className="list-group-item"><strong>Year : </strong>{movieData.Year}</li>
                   <li className="list-group-item"><strong>IMDB Rating : </strong>{movieData.imdbRating}</li>
                   <li className="list-group-item"><strong>Rated : </strong>{movieData.Rated}</li>

                   <li className="list-group-item"><strong>Released : </strong>{movieData.Released}</li>
                   <li className="list-group-item"><strong>Country : </strong>{movieData.Country}</li>

                   <li className="list-group-item"><strong>Runtime : </strong>{movieData.Runtime}</li>
                   </ul>
                   </div>

                   <div className="col-md-4 ">
                   <ul className="list-group">


                   <li className="list-group-item"><strong>Actors : </strong>{movieData.Actors}</li>
                   <li className="list-group-item"><strong>Director : </strong>{movieData.Director}</li>
                   <li className="list-group-item"><strong>Writer : </strong>{movieData.Writer}</li>
                   
                   <li className="list-group-item"><strong>Awards : </strong>{movieData.Awards}</li>
                   <li className="list-group-item"><strong>Box Office : </strong>{movieData.BoxOffice}</li>
                   
               </ul>


           </div>

       </div>
       <hr/>

       <NavLink to="/" className="btn btn-default text-dark"> Homepage </NavLink>

       <hr/>

       </body>
       
</>

       
    )
}