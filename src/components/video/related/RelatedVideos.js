import RelatedVideo from "./RelatedVideo";
import {useGetRelatedVideosQuery} from "../../../features/api/apiSlice";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader";
import Error from "../../ui/Error";

export default function RelatedVideos({video}) {
    let {id,title} = video;
    const {data: relatedVideos, isLoading, isError} = useGetRelatedVideosQuery({id,title});

    let content = "";
    if(isLoading){
        content = <>
            <RelatedVideoLoader/>
            <RelatedVideoLoader/>
            <RelatedVideoLoader/>
            <RelatedVideoLoader/>
        </>
    }

    if(!isLoading && isError){
        content = <Error message="There was an error" />
    }

    if(!isLoading && !isError && relatedVideos?.length === 0 ){
        content = <Error message="No related videos found" />
    }

    if(!isLoading && !isError && relatedVideos?.length > 0 ){
        content =  relatedVideos.map(video =>
            <RelatedVideo video={video} key={video.id} />
        )
    }

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}
