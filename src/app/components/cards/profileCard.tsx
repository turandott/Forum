import React, { FunctionComponent } from 'react'


// type Props = {
//   post: string;
// }

const ProfileCard: FunctionComponent<Props> = ({ }) => (
    <div className="bg-white w-[950px] h-[500px] rounded-md relative self-center mb-5">
        <div className='h-2/5 w-full  bg-slate-300'>
        </div>
        <div className="mx-10 mb-10">
            <div className="w-28 h-28 bg-slate-400 block rounded-md my-[-56px] border-8 border-white">
                avatar
            </div>
            <div className="flex gap-x-5 mb-3 absolute right-5 mt-5">
                <button>написать</button>
                <button>настройки</button>
            </div>
            <div className="mt-20">

                <h1 className="text-4xl font-semibold mb-2"> Ник пользователя</h1>

                <p>описание профиля</p>

                <div className="flex gap-x-5 mt-5">
                    <p style={{color: 2000 >=0 ? "green" : "red"}}>+2000</p>
                    <p>5 подписчиков</p>

                </div>
                <ul className="flex gap-x-5 absolute bottom-5 text-grey">
                    <li>Статьи</li>
                    <li>Комментарии</li>
                    <li>Черновики</li>
                    {/* <li>Донаты</li> */}
                </ul>
            </div>
        </div>
    </div>
)

export default ProfileCard