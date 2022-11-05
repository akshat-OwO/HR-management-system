import { ArrowLeftCircleIcon, ArrowRightCircleIcon, CalendarIcon } from "@heroicons/react/24/outline";

const Tasks = () => {
    return (
        <div className="tasks">
            <div className="task-header">
                <p>Tasks</p>
                <div className="calendar">
                    <ArrowLeftCircleIcon className="icon cal" />
                    <div className="date">
                        <CalendarIcon className="icon cal" />
                        <p>May 9, 2022</p>
                    </div>
                    <ArrowRightCircleIcon className="icon cal" />
                </div>
            </div>
            <div className="task-brief">
                <div className="ongoing">
                    <p>66</p>
                    <p>Ongoing</p>
                </div>
                <div className="delayed">
                    <p>24</p>
                    <p>Delayed</p>
                </div>
                <div className="completed">
                    <p>10</p>
                    <p>Completed</p>
                </div>
                <div className="total-assigned">
                    <p>100</p>
                    <p>Total Assigned</p>
                </div>
            </div>
        </div>
    );
}
 
export default Tasks;