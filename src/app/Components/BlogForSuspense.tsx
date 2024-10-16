"use client"
import { useSuspenseQuery } from "@apollo/client";
import { GET_BLOG } from "@/Apollo/query";

const BlogForSuspense = () => {
    const { data } = useSuspenseQuery(GET_BLOG);

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default BlogForSuspense;