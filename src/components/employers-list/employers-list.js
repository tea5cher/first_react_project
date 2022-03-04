import EmployersListItem from "../employers-list-item/employers-list-item"
import './employers-list.css';


const EmploersList = ({data, onDelete, onToggleIncrease, onToggleRise, onUpdateSalary, onChangeSalary}) => {
  
    const elements = data.map(item=>{
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem 
                key={id}
                {...itemProps} 
                onDelete={()=> onDelete(id)}
                onToggleIncrease={()=>onToggleIncrease(id)}
                onToggleRise={()=>onToggleRise(id)} 
                onUpdateSalary={()=>onUpdateSalary(id)} 
                onChangeSalary={(e) => onChangeSalary(id, e.target.value)}  
            />
        )
    })
    
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmploersList