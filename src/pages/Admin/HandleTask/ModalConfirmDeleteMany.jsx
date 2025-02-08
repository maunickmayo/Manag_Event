import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import ModalCreateTask from "./ModalCreateTask";
import ModalUpdateTask from "./ModalUpdateTask";
import ModalConfirmDeleteOne from "./ModalConfirmDeleteOne";

export default function TaskList() {

    const [open, setOpen] = useState<boolean>(false);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState<boolean>(false);
    const [isModalConfirmOpen, setIsModalConfirmOpen] = useState<boolean>(false);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);


    const [searchQuery, setSearchQuery] = useState<string>("");

   // const handleOpen = (): void => {
        setOpen(!open);
    };

        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
        setIsModalUpdateOpen(false);
   // }

   // function openModalUpdate(task: Task): void {
        setSelectedTask(task);
        setIsModalUpdateOpen(true);
  //  }

   // function closeModalUpdate(): void {
        setSelectedTask(null);
        setIsModalUpdateOpen(false);
   // }

    //function handleDeleteClick(task: Task): void {
        setSelectedTask(task);
        setIsModalConfirmOpen(true);
   // }

 //   function deleteTask(id: string): void {
        setTasks(tasks.filter(task => task.id !== id));
        setIsModalConfirmOpen(false);
   // }

   // function handleSelectItem(id: string): void {
        setSelectedTasks((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter(taskId => taskId !== id)
                : [...prevSelected, id]
        );
   // }

   // function deleteSelectedTasks(): void {
        setTasks(tasks.filter((task) => !selectedTasks.includes(task.id)));
        setSelectedTasks([]);
   // }

    // Gestion de la recherche : filtre les tâches en fonction de la recherche
    const filteredTasks = tasks.filter((task) =>
        task.nom.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <>
            <h1 className="font-bold text-center text-xl mt-10">Espace Admin</h1>
            <h2 className="font-bold text-center text-md mt-10">Liste des tâches :</h2>

            {/* Barre de recherche */}
            <div className="flex justify-center rounded-md mt-5 mb-5 relative">
                <input
                    type="text"
                    placeholder="Recherche par nom"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 text-black w-8/12 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 rounded-md border border-gray-300"
                />
                <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black" />
            </div>

            <div className="mt-10 w-6/12 mx-auto">
                <ModalCreateTask handleOpen={handleOpen} open={open} tasks={tasks} setTasks={setTasks} />
            </div>

            {/**  {filteredTasks.length ? (
                <div className="text-white mt-5 gap-1 p-5 flex flex-col w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
                    <ul>
                    {filteredTasks.map((task: Task) => (
                            <li key={task.id} className="flex mt-3 items-center border border-orange-300 p-2 gap-1 rounded-lg">
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
                                    <FontAwesomeIcon
                                        title="Modifier la tâche"
                                        icon={faPencil}
                                        onClick={() => openModalUpdate(task)}
                                        className="cursor-pointer"
                                    />
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        title="Supprimer la tâche"
                                        onClick={() => handleDeleteClick(task)}
                                        className="cursor-pointer"
                                    />
                                </span>
                            </li>
                        ))}
                    </ul>

                    {selectedTasks.length > 0 && (
                        <button
                            onClick={deleteSelectedTasks}
                            className="mt-10 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                        >
                            Supprimer la(les) tâche(s) sélectionnée(s)
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
                </div>
            ) : (
                <p className="text-center text-md mt-10 text-orangeDP">
                    Aucune tâche trouvée
                </p>
            )}  */} 
        </>
    );
//} 

