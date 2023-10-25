import React from "react";
import { useNavigate } from "react-router-dom";

const CommunityCard = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate("/community/description", { state: { ...data } })}
            className="text-[#0095ff] w-[22rem] h-[430px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-white"
        >
            <div className="overflow-hidden">
                <img
                    className="h-48 w-full rounded-tl-lg rounded-tr-lg  group-hover:scale-[1.2]  transition-all ease-in-out duration-300 "
                    src={data?.thumbnail?.secure_url}
                    alt="Community thumbnail"
                />
            </div>

            {/* Community details */}
            <div className="p-3 space-y-1 text-[#0095ff]">
                <h2 className="text-xl font-bold text-[#ff7070] line-clamp-2">
                    {data?.title}
                </h2>
                <p className="font-semibold">
                    <span className="text-[#ff7070] font-bold">Category : </span>
                    {data?.category}
                </p>
                <p className="line-clamp-2">{data?.description}</p>
            </div>
        </div>
    );
};

export default CommunityCard;