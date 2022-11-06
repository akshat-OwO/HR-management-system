import { PlusIcon } from "@heroicons/react/24/outline";

const NewTask = ({ setIsAdding }) => {

    const handleAdd = () => {
        setIsAdding(true);
    }

    return (
        <button className="newtask" onClick={handleAdd}>
            <PlusIcon className="icon" />
            <p>Add New Task</p>
        </button>
    );
}
 
export default NewTask;