import { BUTTONCOLORS } from "../../styles/tw"

function Button({ name, onClick, InternClassName, clicked, disabled }: { name: string, onClick: any, InternClassName?: any,  clicked?: boolean, disabled?: boolean }) {
  const BUTTONBG = 'bg-red-500';

  return (
    <>
      <div onClick={onClick} className={InternClassName ? InternClassName : `${BUTTONBG} ${BUTTONCOLORS(clicked, disabled)} rounded-lg`}>
        {name}
      </div>
    </>
  )
}

export default Button