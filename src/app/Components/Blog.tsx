"use client"
import { useQuery } from "@apollo/client";
import { GET_BLOG } from "@/Apollo/query";

const Blog = () => {
    const { data } = useQuery(GET_BLOG);

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default Blog;