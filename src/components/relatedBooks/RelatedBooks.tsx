import { Link } from 'react-router-dom';
import Book from '../../assets/book.png';
import { PiArrowCircleRightLight, PiArrowCircleLeftLight } from 'react-icons/pi';
import { ThreeDots } from 'react-loader-spinner';
import { RelatedBooksPropsType } from '../../types/bookTypes';

const RelatedBooks = ({ relatedBooks, prevBooksHandler, nextBooksHandler, currentIndex, length, showLoader, handlePrevNextClick }: RelatedBooksPropsType) => {
    
    return (
        <div className="bg-[#183B56] py-12 md:pt-14 md:pb-20 md:mb-16 mb-7 w-full overflow-clip">
            <div className="flex md:justify-between justify-center md:mb-0 mb-10 md:mx-[10.417%]">
                <div>
                    <h2 className="text-white text-3xl">Related Books</h2>
                </div>
                <div className="hidden md:flex">
                    <button
                        onClick={() => handlePrevNextClick(prevBooksHandler)}
                        disabled={currentIndex === 0}
                        className="text-white px-2 disabled:opacity-50"
                    >
                        <PiArrowCircleLeftLight size={56} />
                    </button>
                    <button
                        onClick={() => handlePrevNextClick(nextBooksHandler)}
                        disabled={currentIndex + 5 >= length}
                        className="text-white px-2 pr-0 disabled:opacity-50"
                    >
                        <PiArrowCircleRightLight size={56} />
                    </button>
                </div>
            </div>
            <div className="flex xl:items-center flex-col md:mt-14">
                {showLoader && (
                    <div className="flex items-center justify-center h-64">
                        <ThreeDots radius={40} width='200' height='200' color='blue' visible={true} />
                    </div>
                )}
                {!showLoader && (
                    <div className="flex space-x-[30px] mx-9 xl:overflow-x-clip overflow-x-scroll">
                        {relatedBooks.map((book) => (
                            <Link key={book?.id} to={`/book/${book?.id}`}>
                                <div className="relative">
                                    <img
                                        className="object-cover min-w-[204px] max-w-[204px] min-h-[298px] max-h-[298px] rounded-md"
                                        src={book?.volumeInfo?.imageLinks?.thumbnail ? book?.volumeInfo?.imageLinks?.thumbnail : Book}
                                        alt="Book"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
                <div className="flex items-center justify-center md:hidden mt-10">
                    <button
                        onClick={() => handlePrevNextClick(prevBooksHandler)}
                        disabled={currentIndex === 0}
                        className="text-white px-2 disabled:opacity-50"
                    >
                        <PiArrowCircleLeftLight size={48} />
                    </button>
                    <button
                        onClick={() => handlePrevNextClick(nextBooksHandler)}
                        disabled={currentIndex + 5 >= length}
                        className="text-white px-2 pr-0 disabled:opacity-50"
                    >
                        <PiArrowCircleRightLight size={48} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RelatedBooks;
