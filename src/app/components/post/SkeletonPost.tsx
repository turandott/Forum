import { Skeleton } from '@mui/material'
import React, { FunctionComponent } from 'react'

// type Props = {
//   post: string;
// }

const SkeletonPost: FunctionComponent<Props> = ({ }) => (
    <div className="w-full bg-white md:w-[700px] md:rounded-md relative self-center mb-5">
        <div className="m-6 py-3">

            <div className="flex items-center gap-x-5 mb-5">
                <Skeleton variant="circular" width={50} height={50} />
                <Skeleton variant="rounded" height={20} width={90} />

            </div>
            <div className="flex flex-col gap-y-3">
                <Skeleton variant="rounded" height={20} />
                <Skeleton variant="rounded" height={20} width={"90%"}/>
                <Skeleton variant="rounded" height={20} width={"85%"}/>
            </div>
        </div>
    </div >
)

export default SkeletonPost