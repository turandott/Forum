import React, { FunctionComponent } from 'react'


// type Props = {
//   post: string;
// }

const SubscriptionCard: FunctionComponent<Props> = ({ }) => (
    <div className="bg-white w-[240px] h-[400px] rounded-md relative self-center mb-5">
        <div className="m-2">
            <h1 className="font-semibold">Подписки 6</h1>
            <div className="mt-2 gap-3  grid grid-cols-2">
                
                <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>
                <p>Аккаунт1</p>
                <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>
                <p>Аккаунт1</p>
                <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>
                <p>Аккаунт1</p>
            </div>
        </div>
    </div>
)

export default SubscriptionCard