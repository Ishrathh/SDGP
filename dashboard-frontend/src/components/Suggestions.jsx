import React, { useState } from 'react';
import axios from 'axios';
import '../css/Suggestions.css';

const Suggestions = () => {
  const [suggestion, setSuggestion] = useState("Click on 'Get Hobby'");

  const changeSuggestion = (newSuggestion) => {
    setSuggestion('');
    setSuggestion(newSuggestion);
  }

  const handleGetHobby = async () => {
    await axios
      .post('http://127.0.0.1:5000/getRecommendations')
      .then((response) => {
        console.log(response.data);
        changeSuggestion(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert('Error occured');
      });
  };

  const handleLike = async () => {
    await axios
      .post('http://127.0.0.1:5000/updateRating', { hobby: suggestion, liked: true })
      .then((response) => {
        console.log(response.data);
        
      })
      .catch((error) => {
        console.log(error);
        alert('Error occured');
      });
  };

  const handleDislike = async () => {
    await axios
      .post('http://127.0.0.1:5000/updateRating', { hobby: suggestion, liked: false })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert('Error occured');
      });
  };

  const handleRecommendedHobby = async () => {
    const hobbyTypes = ['Creative', 'Outdoor', 'Intellectual', 'Social', 'Physical'];
    const randomHobbyType = hobbyTypes[Math.floor(Math.random() * hobbyTypes.length)];

    console.log(randomHobbyType);

    await axios
      .post('http://127.0.0.1:5000/suggestHobby', { type: randomHobbyType })
      .then((response) => {
        console.log(response.data);
        changeSuggestion(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert('Error occured');
      });
  };

  return (
    <>
      <div className='suggestion'>{suggestion}</div>
      <div className='btnPane'>
        <button type='submit' className='btn btn-primary darkBtn' onClick={handleGetHobby}>
          Get Hobby
        </button>
        <button type='submit' className='btn btn-primary darkBtn' onClick={handleLike}>
          Like 👍🏽
        </button>
        <button type='submit' className='btn btn-primary darkBtn' onClick={handleDislike}>
          Dislike 👎🏽
        </button>
        <button type='submit' className='btn btn-primary darkBtn' onClick={handleRecommendedHobby}>
          Recommended Hobby
        </button>
      </div>
    </>
  );
};

export default Suggestions;