// import { useState } from 'react';
import { FLEXCOL } from '../../styles/tw';
import identity_picture from '../src/assets/picture/IMG_20250129_092536_199.jpg';

{/* Drapeau animé */}
// function Flag() {
//   const [reveal, setReveal] = useState(false);
  
//   const handleClick = () => {
//     setReveal(true);
//   };

//   return (
//     <div className='w-full h-50'>
//       <div
//         className={`relative w-full cursor-pointer overflow-hidden flag-container ${reveal ? 'reveal' : ''}`}
//         onClick={handleClick}
//       >
//         <img src="../src/assets/picture/Flag_of_Brittany_(Gwenn_ha_du).svg" alt="Drapeau" className="w-full h-full object-cover flag" />
//         {!reveal && (
//           <div className="absolute inset-0 bg-black/80 mask z-10 transition-all duration-700"></div>
//         )}
//       </div>
//     </div>
//   )
// }

// TODO: Travailler le flag et faire une bannière
function HomePage() {

  return (
    <div className={FLEXCOL}>
      {/* <Flag/> */}
      < h1 > Bienvennue sur mon portfolio informatique.</h1 >
      <img className="w-[70%]" alt="html image example" src={identity_picture} />
      <hr />
      <p>Bienvennue sur mon portfolio informatique </p>
    </div>
  )
}

export default HomePage