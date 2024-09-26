import { Link } from 'react-router-dom';
import ButtonDefault from '../../components/ButtonDefault';
import './Homepage.css';

export default function Homepage() {

    // const numbers = [1, 2, 3, 4, 5]
    // const result = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
    //console.log(result);

    return (
        <>
            <div className="homepage pt-20 px-6">
                <div className="flex flex-col">
                    <h1 className="text-white mx-auto font-bold mt-20 text-2xl">Manag'Task</h1>
                    <p className="flex justify-center mt-20 text-center">
                        Bienvenue sur notre application de gestion de tâches ! </p>
                    <p className='flex justify-center text-center'>
                    Organisez, planifiez et suivez vos tâches en toute simplicité.
                    </p>
                   
                </div>
                <div className="mt-10">
                    <div className="w-4/12  md:w-3/12 md:lg:w-3/12 lg:mx-auto xl:w-2/12  mt-10 mx-auto">
                        <Link to={'/taskslist'}>
                            <ButtonDefault>Commencer</ButtonDefault>
                        </Link>
                    </div>
                    {/**
                  *    <div className="w-4/12  md:w-3/12 lg:w-3/12  xl:w-2/12 mx-auto">
                        <Link to={'/login'}>
                            <ButtonDefault>Quick search</ButtonDefault>
                        </Link>
                    </div>
                  * 
                 
                <div className="flex justify-center mx-auto">
                    <Link to="/contact" className="border-b-2 text-white">
                        Contactez-nous
                    </Link>
                </div>
                 
                  */}
                </div>

            </div>
        </>
    );
}
