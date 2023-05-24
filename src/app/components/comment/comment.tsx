import React, { FunctionComponent } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Tooltip } from '@mui/material';

// type Props = {
//   post: string;
// }

const Comment: FunctionComponent<Props> = ({ }) => (
    <div className="w-full bg-white md:w-[700px] md:rounded-md relative self-center">
        <div className="m-6 m-y-3">
            <div className="flex mt-3 gap-x-4">
                <div className="rounded-full wh-10 bg-grey hw-[200px]">
                    icon
                </div>
                <h3 className="">Author</h3>
                <p className="text-gray-500">7 минут</p>


            </div>
            <p className="mt-5">Надеюсь что Ubisoft Connect исчезнет в глубинах ада. Плохой лаучер от Плохой конторы.</p>
            <div className="mt-3 flex gap-x-4">
                <div className="flex">
                    <Tooltip title="Лайк">
                        <FavoriteBorderIcon sx={{ color: 'grey' }} />
                    </Tooltip>
                    <p className="text-grey">4</p>
                </div>
                <p className="text-grey">ответить</p>
                <div className="absolute right-6">
                    <Tooltip title="Дизлайк">
                        <DownloadOutlinedIcon sx={{ color: 'grey' }} />
                    </Tooltip>
                </div>
            </div>
        </div>
    </div>
)

export default Comment