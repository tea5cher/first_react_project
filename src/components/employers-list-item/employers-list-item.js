import './employers-list-item.css';



const EmployersListItem = (props) => {

    const {name, salary, onDelete, onToggleIncrease, onToggleRise, onUpdateSalary, increase, rise, onChangeSalary} = props;

    let classNames = "list-group-item d-flex justify-content-between"

    
    if (increase) {
        classNames += " increase"
    }
    
    if (rise) {
        classNames += " like"
    }

    // console.log(typeof(onToggleIncrease));

    let rep = (e) => {
        const newSalary = e.target.value;
        console.log(newSalary);
        onUpdateSalary(newSalary);
    }
    let nameS = 'Jhon C.';
    let salS = 300;
    // let changeSalary = (e) => {
    //     const newSalary = e.target.value;
    //     console.log(newSalary);
    //     props.onUpdateSalary(id,newSalary);
    // }

    return (
        <li className={classNames}>
        <span className="list-group-item-label" >{name}</span>
        <input type="text" className="list-group-item-input" onChange={onChangeSalary} defaultValue={salary + " $"}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                className="btn-cookie btn-sm "
                onClick={onToggleIncrease}>
                <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
                className="btn-trash btn-sm "
                onClick={onDelete}>
                    <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
    )

}











// Функциональный синтаксис
// const EmployersListItem = ({name,salary,increase}) => {

//     let classNames = "list-group-item d-flex justify-content-between"
   
//     if (increase) {
//         classNames += " increase"
//     } 

//     return (
//         <li className={classNames}>
//         <span className="list-group-item-label">{name}</span>
//         <input type="text" className="list-group-item-input" defaultValue={salary + " $"}/>
//         <div className='d-flex justify-content-center align-items-center'>
//             <button type="button"
//                 className="btn-cookie btn-sm ">
//                 <i className="fas fa-cookie"></i>
//             </button>

//             <button type="button"
//                     className="btn-trash btn-sm ">
//                 <i className="fas fa-trash"></i>
//             </button>
//             <i className="fas fa-star"></i>
//         </div>
//     </li>
//     )
// }


export default EmployersListItem