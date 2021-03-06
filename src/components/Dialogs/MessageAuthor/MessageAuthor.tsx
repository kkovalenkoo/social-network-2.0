import {NavLink} from 'react-router-dom';

type UserPropsType = {
    id: number
    name: string
}

export function MessageAuthor(props: UserPropsType) {
    return (
        <div>
            <NavLink to={`/dialogs/1 ${props.id}`}>{props.name}</NavLink>
        </div>
    );
}