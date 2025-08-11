import { THEMES } from '../../styles/tw';
import Pastel from '../composants/Pastel';

export default function Theme({nbr, colors?}, {nbr: number, colors?: string[]}) {

    return (
        <div className={`${THEMES}`}>
            <li className="nav-item ms-3">
                <svg id="themeSelector" width="500" height="150" style="stroke: white; stroke-width: 1;">
                    {nbr.map(
                        <Pastel color={color}/>
                    )}
                </svg>
            </li>
        </div>
    )
}