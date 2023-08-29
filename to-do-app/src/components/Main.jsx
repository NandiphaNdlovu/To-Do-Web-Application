import './List.js';
export const Main = () => {
    return (
        <div className="task-container">
            <form id="new-task-form">
                <input type="text" name="new-task-input" id="new-task-input" placeholder="What do you have planned?" />
                <input type="submit" id="new-task-submit" value="Add" />
            </form>

            <div className="task-list">
                <div className='task'>
                    {/*}
                    <div className="content">
                        <input type="text" className="text" placeholder="Some text" />
                    </div>
                    <div className="actions">
                        <button className="edit">edit</button>
                        <button className="edit">delete</button>
                    </div>
                    */}
                </div>
            </div>

        </div>
    )
}