import { Skeleton } from '@mui/material'
import React, { FunctionComponent } from 'react'

// type Props = {
//   post: string;
// }

const SkeletonSideComments: FunctionComponent<Props> = ({ }) => (
    <div className="hidden xl:block pt-2 pl-5 absolute right-10 w-[250px] mt-16">

        <ul className="grid gap-y-5 grid-cols-2">
            <Skeleton variant="rounded" width={40} height={40} />
            <li className="flex flex-col gap-y-3">
                <Skeleton variant="rounded" width={90} height={10} />
                <Skeleton variant="rounded" width={70} height={10} />
            </li>

            <Skeleton variant="rounded" width={40} height={40} />
            <li className="flex flex-col gap-y-3">
                <Skeleton variant="rounded" width={90} height={10} />
                <Skeleton variant="rounded" width={70} height={10} />
            </li>

            <Skeleton variant="rounded" width={40} height={40} />
            <li className="flex flex-col gap-y-3">
                <Skeleton variant="rounded" width={90} height={10} />
                <Skeleton variant="rounded" width={70} height={10} />
            </li>

            <Skeleton variant="rounded" width={40} height={40} />
            <li className="flex flex-col gap-y-3">
                <Skeleton variant="rounded" width={90} height={10} />
                <Skeleton variant="rounded" width={70} height={10} />
            </li>
            
            <Skeleton variant="rounded" width={40} height={40} />
            <li className="flex flex-col gap-y-3">
                <Skeleton variant="rounded" width={90} height={10} />
                <Skeleton variant="rounded" width={70} height={10} />
            </li>

        </ul>

    </div>
)

export default SkeletonSideComments