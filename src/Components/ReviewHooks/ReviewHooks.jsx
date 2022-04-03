import { useEffect, useState } from 'react';

const useReviewHooks = () => {

const [review, setReview]= useState([])

useEffect(()=>{
    fetch('reviewData.json')
    .then(res => res.json())
    .then(data=> setReview(data))
},[])

    return [review, setReview]
       
}

export default useReviewHooks;