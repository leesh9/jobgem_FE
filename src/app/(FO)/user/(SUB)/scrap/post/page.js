"use client"

import { getToken } from "@/app/util/token/token";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ScrapPage({ query }) {

    const [scraps, setScraps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchScraps = async () => {
            const token = await getToken();
            const userIdx = token.IDX;
            const res = await axios.get(`/api/scrap/list/${userIdx}`);
            setScraps(res.data);
            setLoading(false);
        }

        fetchScraps();
    }, []);

    return (
        <div className="w-full h-full p-8">
            <h1 className="text-3xl font-bold mb-4">스크랩 공고</h1>
            <div className="flex items-center mb-4 border-t mt-1 border-gray-300"/>
            <div>
                {   scraps.length > 0 ?
                    scraps.map((scrap) => (
                        <div key={scrap.id} className="flex items-center pb-4 gap-4 border-b mt-1 border-gray-300">
                            <div className="flex flex-col w-10/12">
                                <h2 className="text-lg font-bold">{scrap.post.company.coName}</h2>
                                <Link href={`/post/view/${scrap.poIdx}`} className="text-lg font-bold">{scrap.post.poTitle}</Link>
                                <p className="text-sm text-gray-500">{scrap.post.poContent}</p>
                            </div>
                            <div className="flex flex-col w-2/12 items-center justify-center gap-2">
                                <button className="bg-blue-500 text-white w-full p-2 rounded-md">즉시지원</button>
                                <h4 className="text-sm text-gray-500">{scrap.post.poDeadline}까지</h4>
                            </div>
                        </div>
                    )) :
                    loading ? (
                        <p className="flex items-center justify-center">데이터 가져오는 중</p>
                    ) : (
                        <div>
                            <p className="flex items-center justify-center">스크랩 한 공고가 없습니다.</p>
                            <div className="flex justify-center mt-4">
                                <Link href="/recruit"  className="bg-blue-500 text-white py-2 px-4 rounded-md">
                                    공고 확인하기
                                </Link>
                            </div>
                        </div>
                    )

                }

            </div>
        </div>
    )
}