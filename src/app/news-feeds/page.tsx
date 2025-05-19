'use client'
import GridLayout from "@/components/shared/gridLayout";
import Link from "next/link";
import { useEffect, useState } from "react";


const data = [
    {
        title: "The Manchester Derby Showdown: Who Will Rule Manchester?",
        message: "The wait is over! The Manchester Derby is here, and the football world is buzzing with excitement. Manchester United vs. Manchester City—two giants, one city, and bragging rights on the line. This is ",
        watchLink: "http/wooenoinr/eo"
    },
    {
        title: "The Manchester Derby Showdown: Who Will Rule Manchester?",
        message: "The wait is over! The Manchester Derby is here, and the football world is buzzing with excitement. Manchester United vs. Manchester City—two giants, one city, and bragging rights on the line. This is ",


    },
    {
        title: "The Manchester Derby Showdown: Who Will Rule Manchester?",
        message: "The wait is over! The Manchester Derby is here, and the football world is buzzing with excitement. Manchester United vs. Manchester City—two giants, one city, and bragging rights on the line. This is ",

    },
    {
        title: "The Manchester Derby Showdown: Who Will Rule Manchester?",
        message: "The wait is over! The Manchester Derby is here, and the football world is buzzing with excitement. Manchester United vs. Manchester City—two giants, one city, and bragging rights on the line. This is ",

    },
]
const NewsFeeds = () => {
    const [newsFeedData, setNewsFeedData] = useState([])
    const [columnCount, setColumnCount] = useState(1);

    useEffect(() => {
        setNewsFeedData(data)
    },[])

    const newsCard = ({ key, rowIndex, columnIndex, style }) => {
        const index = rowIndex * columnCount + columnIndex;
        const news = newsFeedData[index];
        if (!news) return null;

        return (
            <div key={key} style={{ ...style, marginRight: "0px", gap: "0px", padding: "0px", columnGap: "0px", width: '70%', maxWidth: "350px", marginBottom: '20px', }} className="rder">

                <div className="border md:max-w-[350px] w-[100%]  md:h-[430px] px-4 py-4 rounded-lg">
                    <h1 className="text-center font-semibold text-lg px-2">{news.title}</h1>

                    <p className="py-5 my-3 text-sm tracking-wider ">{news.message}</p>


                    {news.watchLink && (<p className="text-sm"> <span className="font-bold">Watch Match </span><span className="text-blue-600">{news.watchLink}</span></p>)}

                    <div className="text-blue-500 my-4 text-sm"><Link href={'#'}>see more</Link></div>
                </div>
            </div>
        )
    }

    return (
        <>
            <h1 className="text-center text-4xl my-5 text-blue">News Feeds</h1>
            <div className="flex w-full mt-10  scrollbar-hide   justify-center flex-wrap   gap-x-[calc(5%)]   gap-y-12  ">
                <GridLayout data={newsFeedData} columnCount={columnCount} renderItem={newsCard} setColumnCount={setColumnCount} />
            </div>
        </>
    );
}

export default NewsFeeds;