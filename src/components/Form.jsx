import React from 'react'

function Form({name, setName, message, setMessage,rating, setRating, handleSubmit}) {
    return (
        <>
            <form onSubmit={handleSubmit} className='mb-10 p-6 border border-gray-200 rounded-lg shadow-sm bg-gray-50'>
                <h2 className='text-2xl font-bold text-blue-400 mb-6'>Submit Your Feedback</h2>
                <div className=' mb-4'>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-200"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                        className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-200 resize-y"
                        placeholder="Your feedback message..."
                        required
                    ></textarea>
                </div>
                <div className="mb-6">
                        <label htmlFor="rating" className="block text-gray-700 text-sm font-semibold mb-2">
                            Rating:
                        </label>
                        <select
                            id="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-200"
                            required
                        >
                            <option value="1">1 Unsatisfactory</option>
                            <option value="2">2 Below average</option>
                            <option value="3">3 Satisfactory</option>
                            <option value="4">4 Very Good</option>
                            <option value="5">5 Excellent</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                    >
                        Submit Feedback
                    </button>

            </form>
        </>
    )
}

export default Form
