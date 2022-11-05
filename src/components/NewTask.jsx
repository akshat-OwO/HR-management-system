import { PlusIcon } from "@heroicons/react/24/outline";

const NewTask = () => {
    return (
        <button className="newtask">
            <PlusIcon className="icon" />
            <p>Add New Task</p>
        </button>
    );
}
 
export default NewTask;