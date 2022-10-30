// import Success from "../ui/Success";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import {useAddVideoMutation} from "../../features/api/apiSlice";
import {useState} from "react";
import Success from "../ui/Success";
import Error from "../ui/Error";

export default function Form() {
    const [addVideo, {data: video, isLoading, isError,isSuccess}] = useAddVideoMutation();
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [description,setDescription] = useState('');
    const [videoLink,setVideoLink] = useState('');
    const [thumbnailLink,setThumbnailLink] = useState('');
    const [date,setDate] = useState('');
    const [duration,setDuration] = useState('');
    const [views,setViews] = useState('');

    const resetForm = () => {
            setTitle('');
            setAuthor('');
            setDescription('');
            setVideoLink('');
            setThumbnailLink('');
            setDate('');
            setDuration('');
            setViews('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addVideo({
            "title":title,
            "description": description,
            "author": author,
            "date":  date,
            "duration":   duration,
            "views":  views,
            "link": videoLink,
            "thumbnail":  thumbnailLink,
        })
        resetForm();
    }
    return (
        <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput value={title} title="Video Title" onChange={e => setTitle(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput value={author} title="Author" onChange={e => setAuthor(e.target.value)} />
                        </div>

                        <div className="col-span-6">
                            <TextArea  value={description} title="Description" onChange={e => setDescription(e.target.value)} />
                        </div>

                        <div className="col-span-6">
                            <TextInput  value={videoLink} title="YouTube Video link" onChange={e => setVideoLink(e.target.value)} />
                        </div>

                        <div className="col-span-6">
                            <TextInput title="Thumbnail link" value={thumbnailLink}  onChange={e => setThumbnailLink(e.target.value)} />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput value={date}  onChange={e => setDate(e.target.value)} title="Upload Date" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput title="Video Duration" value={duration}  onChange={e => setDuration(e.target.value)}  />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput title="Video no of views" value={views}  onChange={e => setViews(e.target.value)} />
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

                { isSuccess && <Success message="Video was added successfully" /> }
                { isError && <Error message="There was an error" /> }
            </div>
        </form>
    );
}
