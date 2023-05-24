import React, { FunctionComponent } from 'react'
import { Skeleton } from '@mui/material';

const SkeletonSidebar: FunctionComponent<Props> = ({ }) => (
    <div className="hidden lg:block pt-2 pl-5 absolute w-[250px]">
        <Skeleton variant="rounded" width={200} height={800} />

    </div>
)

export default SkeletonSidebar