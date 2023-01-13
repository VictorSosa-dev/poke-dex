import { useParams } from 'react-router';

const Pokemon = () => {
    const {name} = useParams()
    return (
        <div>
            hola: 
            {name}
        </div>
    );
};

export default Pokemon;