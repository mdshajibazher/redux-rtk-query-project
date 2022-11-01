import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import {useState} from "react";
import {useEditVideoMutation} from "../../features/api/apiSlice";

export default function Form({video}) {
    const {
        id,
        title: initialTitle,
        author: initialAuthor,
        description: initialDescription,
        link: initialLink,
        thumbnail: initialThumbnail,
        duration: initialDuration,
        views: initialViews
    } = video;

    const [editVideo, {data: editedVideo,isLoadin, isError,}] = useEditVideoMutation
    const [title,setTitle] = useState(initialTitle);
    const [author,setAuthor] = useState(initialAuthor);
    const [description,setDescription] = useState(initialDescription);
    const [videoLink,setVideoLink] = useState(initialLink);
    const [thumbnailLink,setThumbnailLink] = useState(initialThumbnail);
    const [date,setDate] = useState(initialViews);
    const [duration,setDuration] = useState(initialDuration);
    const [views,setViews] = useState(initialViews);

    // const resetForm = () => {
    //     setTitle('');
    //     setAuthor('');
    //     setDescription('');
    //     setVideoLink('');
    //     setThumbnailLink('');
    //     setDate('');
    //     setDuration('');
    //     setViews('');
    // }
    //
    const handleSubmit = (e) => {
        e.preventDefault();
        editVideo({
            id: id,
            data: {
                "title":title,
                "description": description,
                "author": author,
                "date":  date,
                "duration":   duration,
                "views":  views,
                "link": videoLink,
                "thumbnail":  thumbnailLink,
            }
        })
        resetForm();
    }


    return (
        <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput title="Video Title" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput title="Author" />
                        </div>

                        <div className="col-span-6">
                            <TextArea title="Description" />
                        </div>

                        <div className="col-span-6">
                            <TextInput title="YouTube Video link" />
                        </div>

                        <div className="col-span-6">
                            <TextInput title="Thumbnail link" />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput title="Upload Date" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput title="Video Duration" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput title="Video no of views" />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}
