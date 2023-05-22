import React, { FunctionComponent } from 'react'


// type Props = {
//   post: string;
// }

const SubscribersCard: FunctionComponent<Props> = ({ }) => (
    <div className="bg-white w-[240px] h-[100px] rounded-md relative self-center mb-5 mt-5">
        <div className="m-2">
            <h1 className="font-semibold">Подписчики 4</h1>
            <div className="mt-2 flex gap-x-3">
                <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>
                <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>
                <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>
            </div>
        </div>
    </div>
)

export default SubscribersCard