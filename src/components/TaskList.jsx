import { Bars4Icon, BarsArrowDownIcon } from "@heroicons/react/24/outline";

const TaskList = ({ todos }) => {
    return (
        <div className="tasklist">
            <div className="list-header">
                <p>Task List</p>
                <div className="list-select">
                    <div className="button">
                        <button className="all">
                            <BarsArrowDownIcon className="icon" />
                            <p>All</p>
                        </button>
                    </div>
                    <div className="button">
                        <div className="button">
                            <button className="mytasks">
                                <Bars4Icon className="icon" />
                                <p>My Tasks</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lists">
                <div className="lists-header">
                    <p>Tasks</p>
                    <p>Time</p>
                    <p>Date</p>
                    <p>Assigned By</p>
                    <p>Assigned To</p>
                    <p>Deadline</p>
                    <p>Status</p>
                    <p>Priority</p>
                </div>
                <div className="all-lists">
                    {
                        todos.map((todo) => (
                            <div className="task-row" key={todo.user_id}>
                                <p>{todo.title.slice(0, 10)}</p>
                                <p>12:00</p>
                                <p>{todo.due_on.slice(0, 10)}</p>
                                <p>Manohar Patnaik</p>
                                <p>Arvind Karmarkar</p>
                                <p>{todo.due_on.slice(0, 10)}</p>
                                <div className="status" data-status={todo.status}></div>
                                <p>High</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default TaskList;