import React, { FunctionComponent } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Skeleton, Tooltip } from '@mui/material';

// type Props = {
//   post: string;
// }

const SkeletonComment: FunctionComponent<Props> = ({ }) => (
    <div className="w-full bg-white md:w-[700px] md:rounded-md relative self-center">
        <div className="m-6 py-3">

            <div className="flex items-center gap-x-5 mb-5">
                <Skeleton variant="circular" width={50} height={50} />
                <Skeleton variant="rounded" height={10} width={90} />

            </div>
            <div className="flex flex-col gap-y-3">
                <Skeleton variant="rounded" height={10} />
                <Skeleton variant="rounded" height={10} width={"90%"} />
            </div>
        </div>
    </div>
)

export default SkeletonComment