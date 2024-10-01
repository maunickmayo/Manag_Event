import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
//import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ModalCreateTask from "./ModalCreateTask";
import ModalUpdateTask from "./ModalUpdateTask";
import ModalConfirmDeleteOne from "./ModalConfirmDeleteOne";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

//import { useLocation } from "react-router-dom";
export interface Task {
    id: string,
    nom: string,
    description: string
}

export default function TaskList() {


    const [tasks, setTasks] = useState<Task[]>([
        {
            id: crypto.randomUUID(),
            nom: "Buvette",
            description: "Entretien de la buvette"
        },
        {
            id: crypto.randomUUID(),
            nom: "Accueil",
            description: "Accueillir et orienter les visiteurs"
        },
    ]);
    //console.log(typeof crypto.randomUUID())

    const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState<boolean>(false);
    const [isModalConfirmOpen, setIsModalConfirmOpen] = useState<boolean>(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    // const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

    const handleOpen = (): void => {
        setOpen(!open);
    };

    // Handle task update
    function handleUpdateTask(updatedTask: Task): void {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
        setIsModalUpdateOpen(false);
    };

    function openModalUpdate(task: Task): void {
        setSelectedTask(task);
        setIsModalUpdateOpen(true);
    };

    function closeModalUpdate(): void {
        setSelectedTask(null);
        setIsModalUpdateOpen(false);
    };

    // Ouvrir la modale de confirmation avant de supprimer la tâche
    function handleDeleteClick(task: Task): void {
        setSelectedTask(task);
        setIsModalConfirmOpen(true);
    };
    // Handle single task deletion
    function deleteTask(id: string): void {
        setTasks(tasks.filter(task => task.id !== id))
        setIsModalConfirmOpen(false);
    };

    // Handle selecting/deselecting tasks
    function handleSelectItem(id: string): void {
        setSelectedTasks((prevSelected) => prevSelected.includes(id) ?
            prevSelected.filter((taskId) => taskId !== id) // Deselect task
            : [...prevSelected, id] // Select task
        );
    };
    //Le ... est l'opérateur de décomposition (spread operator) qui copie les éléments de prevSelected.

    // Handle deletion of selected tasks
    function deleteSelectedTasks(): void {
        setTasks(tasks.filter((task) => !selectedTasks.includes(task.id)));
        setSelectedTasks([]); // Clear selection after deletion
    };

    return (
        <>
            <div className="py-10 ms-3 ">
                <Link className="hover:text-lightBlueDP text-orangeDP flex place-items-center gap-1"
                to={'/'}
                >
                <FaArrowLeft className="text-orangeDP"/>  
                    <span className="hover:text-lightBlueDP text-orangeDP">Retour à la page d'accueil</span> 
                    </Link>
            </div>
           

            <h2 className="font-bold text-center text-md mt-10">Liste des taches :</h2>

            {/*----------BARRE DE RECHERCHE A  REVOIR CAR PAS ENCORE IMPLEMENTE CORRECTEMENT-
                 <div className=" flex justify-center  rounded-md mt-5 mb-5 relative">
                      <input type="text" placeholder="Recherche par nom" className="px-10 text-black" />
                  <FontAwesomeIcon title="Voir la tache" icon={faSearch} className=" absolute text-black top-1 ms-60" />
                 </div>
                -------- */}

            <div className="mt-10 w-6/12 mx-auto" >
                <ModalCreateTask handleOpen={handleOpen} open={open} tasks={tasks} setTasks={setTasks} />
            </div>

            {tasks.length ?
                (<div className="text-white mt-5 gap-1 p-5 flex flex-col w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
                    <ul> {tasks.map((task: Task) => (
                        <li key={task.id} className="flex mt-3 items-center border border-orange-300 p-2 gap-1 rounded-lg " >
                            <label htmlFor="" className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={selectedTasks.includes(task.id)}
                                    onChange={() => handleSelectItem(task.id)}
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span className="p-1 mr-10">{task.nom}</span>
                            </label>
                            <span className="flex gap-5 ml-auto">
                                <FontAwesomeIcon title="Modifier la tache" icon={faPencil} onClick={() => openModalUpdate(task)} className="cursor-pointer" />

                                <FontAwesomeIcon icon={faTrash} title="Supprimer la tâche" onClick={() => handleDeleteClick(task)} className="cursor-pointer" />
                            </span>
                        </li>
                    ))}
                    </ul>

                    {selectedTasks.length > 0 && (
                        <button
                            onClick={deleteSelectedTasks}
                            className="mt-10 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                        >
                            Supprimer la(les) tâches sélectionné(e)s
                        </button>
                    )}

                    {isModalUpdateOpen && selectedTask && (
                        <ModalUpdateTask
                            defaultValues={selectedTask}
                            onSubmit={handleUpdateTask}
                            openModalUpdate={openModalUpdate}
                            closeModalUpdate={closeModalUpdate}
                            isModalUpdateOpen={isModalUpdateOpen}
                        />
                    )}

                    {isModalConfirmOpen && selectedTask && (
                        <ModalConfirmDeleteOne
                            task={selectedTask}
                            onConfirm={() => deleteTask(selectedTask.id)}
                            onCancel={() => setIsModalConfirmOpen(false)}
                        />
                    )}
                </div>) : (<p className="text-center text-md mt-10 text-orangeDP ">Aucune tache pour l'instant</p>)
            }

          
        </>
    )
}

{/**  <div className=" w-6/12 p-1 mx-10"><Link to="" title="">{task.nom}</Link></div>
                             *  <FontAwesomeIcon icon={faTrash} title="Supprimer la tache" onClick={() => deleteTask(task.id)}
                                    className="cursor-pointer" />
                            */}