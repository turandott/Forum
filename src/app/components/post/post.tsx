import React, { FunctionComponent } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

// type Props = {
//   post: string;
// }

const Post: FunctionComponent<Props> = ({ }) => (
    <div className="bg-white w-[700px] rounded-md relative self-center">
        <div className="m-6 m-y-3">
            <div className="flex mt-3 gap-x-4">
                <h3 className="">Author</h3>
                <p className="text-gray-500">7 минут</p>
                <div className="absolute right-6 flex gap-x-4 ">
                    <PersonAddRoundedIcon />
                    <MoreHorizRoundedIcon />
                </div>

            </div>
            <h1 className="my-3 text-3xl font-semibold">Post</h1>
            <p className="mt-5">Надеюсь что Ubisoft Connect исчезнет в глубинах ада. Плохой лаучер от Плохой конторы.</p>
            <div className="mt-3 flex gap-x-4">
                <div className="flex">
                    <FavoriteBorderIcon />
                    <p>4</p>
                </div>
                <ChatBubbleOutlineRoundedIcon />
                <AutorenewIcon />
                <BookmarkBorderIcon />
                <div className="absolute right-6">
                    <DownloadOutlinedIcon />
                </div>
            </div>
        </div>
    </div>
)

export default Post