import './employers-add-form.css';

import { Component } from 'react'



class EmployersAddForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: '',
            id: 4,
            val: 'hidden',
        }
        this.alertClassNames = "hidden"; 
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
     
    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.name === ""|| this.state.salary<1) return
        

        this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        }
    
    
    render() {
        const {name, salary} = this.state

          
        
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name='name'
                    value={name}
                    onChange={this.onChangeValue}
                    />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name='salary'
                    value={salary} 
                    onChange={this.onChangeValue}
                    />

                <button type="submit"
                    className="btn btn-outline-light"
                    // onClick={(e)=>createItem(e, name, salary, id)}
                    >Добавить</button>
            </form>
            <div className={this.state.val}>Введите имя сотрудника</div>
        </div>
    )
   }
}






// Функциональный синтаксис
// const EmployersAddForm = () => {
//     return (
//         <div className="app-add-form">
//             <h3>Добавьте нового сотрудника</h3>
//             <form
//                 className="add-form d-flex">
//                 <input type="text"
//                     className="form-control new-post-label"
//                     placeholder="Как его зовут?" />
//                 <input type="number"
//                     className="form-control new-post-label"
//                     placeholder="З/П в $?" />

//                 <button type="submit"
//                         className="btn btn-outline-light">Добавить</button>
//             </form>
//         </div>
//     )
// }

export default EmployersAddForm