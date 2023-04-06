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
      .post('http://localhost:8000/getHobby')
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
      .post('http://localhost:8000/like', suggestion.toString)
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
      .post('http://localhost:8000/dislike')
      .then((response) => {
        console.log(response.data);
        alert('Addiction Level: ' + response.data);
      })
      .catch((error) => {
        console.log(error);
        alert('Error occured');
      });
  };

  const handleRecommendedHobby = async () => {
    await axios
      .post('http://localhost:8000/recommendedHobby')
      .then((response) => {
        console.log(response.data);
        alert('Addiction Level: ' + response.data);
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