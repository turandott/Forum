import React, { FunctionComponent } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// type Props = {
//   post: string;
// }

const SideComments: FunctionComponent<Props> = ({ }) => (
    <div className="hidden xl:block pt-2 pl-5 absolute right-10 w-[250px] ">
        <h1 className="font-semibold text-lg mb-10">Комментарии 
        <span><ChevronRightIcon/></span>
         </h1>
        <ul className="grid gap-y-5 grid-cols-2">
            <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>

            <li>Комментарий1</li>
            <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>

            <li>Комментарий2</li>
            <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>

            <li>Комментарий3</li>
            <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>

            <li>Комментарий4</li>
            <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>

            <li>Комментарий5</li>
            <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>

            <li>Комментарий6</li>
            <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>

            <li>Комментарий7</li>
            <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>

            <li>Комментарий8</li>
            <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>

            <li>Комментарий9</li>
            <div className="block bg-slate-300 h-10 w-10 rounded-sm"></div>

            <li>Комментарий10</li>
        </ul>

    </div>
)

export default SideComments