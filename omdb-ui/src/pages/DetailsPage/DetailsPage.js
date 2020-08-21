import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { baseUrl, axiosHeaders } from '../../utils/constants';
import axios from 'axios';

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
       <>

<div class="row">


      <div class="col-md-4">

        <img src={movieData.Poster} alt="Poster" class="img-thumbnail"/>
       </div> 
        <div class="col-md-8">
    <h3>{movieData.Title}</h3>
    <ul class="list-group">
    <li class="list-group-item"><strong>Genre : </strong>{movieData.Genre}</li>
    <li class="list-group-item"><strong>Year : </strong>{movieData.Year}</li>
    <li class="list-group-item"><strong>Rated : </strong>{movieData.Rated}</li>
    <li class="list-group-item"><strong>Released : </strong>{movieData.Released}</li>
    <li class="list-group-item"><strong>Runtime : </strong>{movieData.Runtime}</li>
    <li class="list-group-item"><strong>Actors : </strong>{movieData.Actors}</li>
    <li class="list-group-item"><strong>Type : </strong>{movieData.Type}</li>
    <li class="list-group-item"><strong>Plot : </strong>{movieData.Plot}</li>
    <li class="list-group-item"><strong>Ratings : </strong>{movieData.imdbRating}</li>


    </ul>
           </div>
            </div>

            <NavLink to="/Search"> Homepage </NavLink>

</>

       
    )
}