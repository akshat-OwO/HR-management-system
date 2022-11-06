import { XMarkIcon } from "@heroicons/react/24/outline";

const AddTask = ({ setIsAdding }) => {

    const handleCancel = () => {
        setIsAdding(false);
    }

    return (
        <div className="addtask">
            <div className="addtask-header">
                <p>AddTask</p>
                <XMarkIcon className="icon add" onClick={handleCancel} />
            </div>
            <form className="addtask-form">
                <div className="column">
                    <div className="input-wrapper">
                        <label htmlFor="name">Task Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="5"></textarea>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="related">Related To</label>
                        <input type="text" name="related" id="related" />
                    </div>
                </div>
                <div className="column">
                    <div className="input-wrapper">
                        <label htmlFor="assign">Assign To</label>
                        <input type="text" name="assign" id="assign" />
                    </div>
                </div>
                    <div className="column">
                    <div className="input-wrapper">
                        <label htmlFor="deadline">Set Deadline</label>
                        <input type="date" name="deadline" id="deadline" />
                    </div>
                        <div className="input-wrapper">
                            <label htmlFor="priority">Set Priority</label>
                            <div className="select">
                                <input type="radio" name="priority" id="high" />
                                <label htmlFor="high">High</label>
                            </div>
                            <div className="select">
                                <input type="radio" name="priority" id="medium" />
                                <label htmlFor="medium">Medium</label>
                            </div>
                            <div className="select">
                                <input type="radio" name="priority" id="low" />
                                <label htmlFor="low">Low</label>
                            </div>
                        </div>
                    </div>
            </form>
            <div className="addtask-footer">
                <button onClick={handleCancel}>Cancel</button>
                <button className="add">Add</button>
            </div>
        </div>
    );
}
 
export default AddTask;