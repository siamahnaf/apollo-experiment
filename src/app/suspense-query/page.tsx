
import { PreloadQuery } from "@/Apollo/client";
import { GET_BLOG } from "@/Apollo/query";

import BlogForSuspense from "../Components/BlogForSuspense";

const Page = () => {
    return (
        <PreloadQuery query={GET_BLOG}>
            <div className="px-10 py-20">
                <div className="text-center mb-20">
                    <h4 className="text-3xl">useSuspenseQuery Hook</h4>
                    <p>You Must see the Hydration Error (It is not picking data from PreloadQuery)</p>
                </div>
                <BlogForSuspense />
            </div>
        </PreloadQuery>
    );
};

export default Page;