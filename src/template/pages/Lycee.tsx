import Carrousel from '../composants/Carrousel';
import { FLEXCOL } from '../../styles/tw';

function Lycee() {
    const imagePaths = [
        '../src/assets/picture/renecassin.avif',
        '../src/assets/picture/artduspectacle.JPG',
        '../src/assets/picture/joliocurie.jpg',
        '../src/assets/picture/internat.jpeg',
    ];

    const captions = [
        'Rene cassin Montfort sur Meu',
        'Art du spectacle',
        'Lycée général et technologique Jolio Currie Rennes',
        'Internat de Jolio Currie Rennes'
    ];

    return (
        <div className={FLEXCOL}>
            <h1>Lycee.</h1>
            <Carrousel
                slides={imagePaths.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={captions[index]}
                        className="h-full object-contain"
                    />
                ))}
                captions={captions}
                autoScroll={true}
                interval={4000}
            />
            <p>
                J'ai débuté le Lycée en seconde au lycée René Cassin à Montfort-sur-Meu.
            </p>
            <img src="../src/assets/picture/renecassin.avif" />
            <p>
                Ayant repris mes marques après le collège, j'ai découvert une nouvelle passion : "l'informatique". [...]
            </p>
        </div>
    );
}

export default Lycee;
