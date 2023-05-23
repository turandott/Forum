import React, { FunctionComponent } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Tooltip, Typography } from '@mui/material';

// type Props = {
//   post: string;
// }

const Post: FunctionComponent<Props> = ({ }) => (
    <div className="w-full bg-white md:w-[700px] md:rounded-md relative self-center mb-5">
        <div className="m-6 py-3">
            <div className="flex mt-3 gap-x-4">
                <h3 className="">Author</h3>
                <p className="text-grey">7 минут</p>
                <div className="absolute right-6 flex gap-x-4 ">
                    <Tooltip title="Подписаться">
                        <PersonAddRoundedIcon color="primary" />
                    </Tooltip>
                    <MoreHorizRoundedIcon sx={{ color: 'grey' }} />
                </div>

            </div>
            <h1 className="my-2 text-3xl font-semibold">Post</h1>
            <p className="mt-5">Надеюсь что Ubisoft Connect исчезнет в глубинах ада. Плохой лаучер от Плохой конторы.</p>
            <div className="my-3 flex gap-x-4">
                <div className="flex">
                    <Tooltip title="Лайк">
                        <FavoriteBorderIcon sx={{ color: 'grey' }} />
                    </Tooltip>
                    <p className="text-grey">4</p>

                </div>
                <Tooltip title="Присоединиться к обсуждению">
                    <ChatBubbleOutlineRoundedIcon sx={{ color: 'grey' }} />
                </Tooltip>
                <Tooltip title="Репост">
                    <AutorenewIcon sx={{ color: 'grey' }} />
                </Tooltip>
                <Tooltip title="Закладки">
                    <BookmarkBorderIcon sx={{ color: 'grey' }} />
                </Tooltip>
                <Tooltip title="Дизлайк">
                    <div className="absolute right-6">
                        <DownloadOutlinedIcon sx={{ color: 'grey' }} />
                    </div>
                </Tooltip>
            </div>
        </div>
    </div>
)

export default Post