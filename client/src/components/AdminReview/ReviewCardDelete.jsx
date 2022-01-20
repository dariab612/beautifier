import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function ReviewCardDelete({ name, text, isValid, id }) {
  const dispatch = useDispatch()
  const reviewId = id
  const currentURL = window.location.href
  console.log('CURRENT URL V REVIEW CARD', currentURL)
  //const urll = currentURL.split().splice(0, 22)
  const [ modal, setModal ] = useState(false)

  console.log('REVIEWID V REVIEWCARD NACHALO', id)
  return (
    <>
        <li>
          <h3>{name}</h3>
          <p>{text}</p>
        </li>
        <button onClick={() => dispatch({ type: 'DELETE_FETCH_REVIEW', payload: { reviewId } })}>Удалить отзыв</button>
        <button onClick={() => dispatch({ type: 'APPROVE_FETCH_REVIEW', payload: { reviewId } })}>Пропустить отзыв</button>
        <button onClick={() => setModal(!modal)}>Править отзыв</button>
        { modal && <Modal name={name} text={text} id={reviewId}/> }
    </>
  );
}

export default ReviewCardDelete;
