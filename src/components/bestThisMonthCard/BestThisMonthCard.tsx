import { searchResultsType } from "../../types/searchResultTypes";

const BestThisMonthCard = ({ title, author, image }: searchResultsType) => {
    return (
        <div className="flex m-5 max-w-[311px] max-h-[177.5]">
            <img className="object-center max-w-24 md:max-w-[120px] max-h-[142px] md:min-h-[177.5px] md:max-h-[177.5px] rounded-md mr-3" src={image} alt="Book" />
            <div className="flex flex-col justify-between">
                <h2 className="text-sm font-semibold md:text-lg">{title}</h2>
                <p className="text-sm text-blue-500 font-semibold md:text-lg">{author}</p>
                <button className="bg-blue-950 text-white text-sm md:py-2 rounded-full hover:bg-blue-600 max-w-20 md:max-w-24">Buy Now</button>
            </div>
        </div>
    );
};

export default BestThisMonthCard;
