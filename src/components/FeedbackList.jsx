import React from 'react'

function FeedbackList({currentFeedback, totalPages, currentPage, paginate}) {
    return (
        <>
            <div className="space-y-6">
                {currentFeedback.map((feedback) => (
                    <div key={feedback.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div className="flex justify-between items-start mb-3">
                            <p className="text-xl font-semibold text-gray-800">{feedback.name}</p>
                            <div className="flex items-center text-yellow-500">

                                {Array.from({ length: feedback.rating }).map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.416 3.908 1.48-8.279-6.064-5.828 8.332-1.151z" />
                                    </svg>
                                ))}
                                <span className="ml-2 text-gray-600 text-sm">({feedback.rating}/5)</span>
                            </div>
                        </div>
                        <p className="text-gray-700 text-base leading-relaxed mb-3">{feedback.message}</p>
                        <p className="text-gray-500 text-xs text-right">
                            {feedback.timestamp ? new Date(feedback.timestamp).toLocaleString() : 'Loading date...'}
                        </p>
                    </div>
                ))}
            </div>

            {totalPages > 1 && ( 
                <div className="flex justify-center items-center mt-8 space-x-2 sm:space-x-4 flex-wrap">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 shadow-md text-sm sm:text-base"
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => paginate(pageNumber)}
                            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-md transition duration-200 shadow-md text-sm sm:text-base
                                            ${currentPage === pageNumber
                                    ? 'bg-blue-700 text-white font-bold'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {pageNumber}
                        </button>
                    ))}


                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 shadow-md text-sm sm:text-base"
                    >
                        Next
                    </button>
                </div>
            )}
        </>
    )
}

export default FeedbackList
