import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import FeedbackList from './components/FeedbackList';

function App() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState('5');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const [feedbackList, setFeedbackList] = useState(() => {
    const savedFeedback = localStorage.getItem('feedbackList');
    return savedFeedback ? JSON.parse(savedFeedback) : [].sort((a, b) => b.timestamp - a.timestamp);
  });


  useEffect(() => {
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
  }, [feedbackList]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      rating: parseInt(rating),
      timestamp: new Date(),
    };

    setFeedbackList(prevList => [newFeedback, ...prevList]);

    setName('');
    setMessage('');
    setRating('5');
    setCurrentPage(1);

  };

  const handleAllClear = () => {
    localStorage.clear();
    setFeedbackList(prevList => []);
  }

  const totalPages = Math.ceil(feedbackList.length / itemsPerPage);
  const indexOfLastFeedback = currentPage * itemsPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - itemsPerPage;

  const currentFeedback = feedbackList.slice(indexOfFirstFeedback, indexOfLastFeedback);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 font-sans">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-center text-blue-500 mb-8">
          Feedback Collector
        </h1>
        <Form name={name}
          setName={setName}
          message={message}
          setMessage={setMessage}
          rating={rating}
          setRating={setRating}
          handleSubmit={handleSubmit}
        />
        <div className='flex flex-wrap flex-col items-center '>
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">All Feedback</h2>
          <button
            onClick={() => handleAllClear()}
            disabled = {feedbackList.length === 0}
            className="w-30 m-3 disabled:opacity-50 disabled:cursor-not-allowed bg-red-600 hover:bg-red-400 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Clear All
          </button>

        </div>

        {feedbackList.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">No feedback submitted yet. Be the first!</div>
        ) : (
          <FeedbackList currentFeedback={currentFeedback}
            totalPages={totalPages}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}


      </div>
    </div>
  );
}

export default App
