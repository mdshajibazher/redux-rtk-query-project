import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";
import {useGetVideoQuery} from "../../features/api/apiSlice";
import {useParams} from "react-router-dom";
import Error from "../ui/Error";
import PlayerLoader from "../ui/loaders/PlayerLoader";
import DescriptionLoader from "../ui/loaders/DescriptionLoader";
import RelatedVideoLoader from "../ui/loaders/RelatedVideoLoader";

export default function Video() {
    const {videoId} = useParams();
    const {data : video, isLoading,isError} =  useGetVideoQuery(videoId,{
        refetchOnMountOrArgChange: false ,// we can put seconds like 5,
    });

    let content = "";
    let relatedVideo = "";
    if(isLoading){
        content = <>
            <PlayerLoader/>
            <DescriptionLoader/>
        </>;
        relatedVideo = <><RelatedVideoLoader/>
         <RelatedVideoLoader/>
            </>
    }


    if(!isLoading && isError){
        content = <Error message="There was an error" />;
        relatedVideo = <Error message="There was an error" />;
    }


    if(!isLoading && !isError && !video?.id){
        content = <Error message="No Videos found" />;
        relatedVideo = <Error message="No Content found" />;
    }


    if(!isLoading && !isError && video?.id){
        content = <>
            <Player video={video} />
            <Description video={video} />
        </>
        relatedVideo =   <RelatedVideos video={video} />
    }





    return (
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        {content}
                    </div>

                    {relatedVideo }
                </div>
            </div>
        </section>
    );
}
