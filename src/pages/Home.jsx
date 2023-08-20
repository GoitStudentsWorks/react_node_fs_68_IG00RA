// import React, { useState, useEffect } from 'react';
// import FeedbackButton from '../components/Buttons/FeedbackButton/FeedbackButton';
// import ModalContainer from '../components/Modal/ModalConatiner';
import { AuthSection } from '../components/AuthSection/AuthSection';
import { Description } from '../components/Description/Description';
// import ReviewsSlider from 'components/ReviewsSlider/ReviewsSlider';
// import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
// import { AddFeedbackModal } from '../components/AddFeedbackModal/AddFeedbackModal';
// import { fetchReviewsData } from 'redux/review/reviewOperations';


export default function Home() {
  // const [isModalOpen1, setIsModalOpen1] = useState(false);
  // const [isModalOpen2, setIsModalOpen2] = useState(false);

  // const openModal1 = () => {
  //   setIsModalOpen1(true);
  // };
  // const openModal2 = () => {
  //   setIsModalOpen2(true);
  // };

  // const closeModal1 = () => {
  //   setIsModalOpen1(false);
  // };
  // const closeModal2 = () => {
  //   setIsModalOpen2(false);
  // };

  // const [reviewsData, setReviewsData] = useState([]);

  // useEffect(() => {
  //   fetchReviewsData()
  //     .then(data => setReviewsData(data))
  //     .catch(error => console.error('Error fetching reviews:', error));
  // }, []);

  return (
    <>
      <div>
        <AuthSection />
        <Description />
        {/* <ReviewsSlider reviewsData={reviewsData} /> */}
        {/* <ScrollToTop /> */}
        {/* 
        <FeedbackButton onClick={openModal1} />
        <FeedbackButton onClick={openModal2} />
        <AddFeedbackModal isOpen={isModalOpen1} onRequestClose={closeModal1} />
        <ModalContainer isOpen={isModalOpen2} onRequestClose={closeModal2}>
          <p>HELLO2</p>
        </ModalContainer> */}
      </div>
    </>
  );
}
