import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Jhon C.", salary: 800, increase: true, rise: true, id:1},
                {name: "Alex D.", salary: 3000, increase: true, rise: false, id:2},
                {name: "Mike B.", salary: 5000, increase: false, rise: false, id:3},
            ],
            term: '', 
            filter: 'all',  
        }
        this.maxId = 4;
        // this.count = this.state.data.length
    }

    deleteItem = (id) => {
        this.setState(({data})=>{
            return {
                data: data.filter(item=> item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];

            console.log(newArr);
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        
        this.setState(({data})=>({
            data: data.map(item=>{
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data})=>({
            data: data.map(item=>{
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        } 

        return items.filter(item=>{
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term})
    }

    
    filterPost = (items,filter) => {
        
            switch(filter){
                case 'rise':
                    return items.filter(item=>item.rise)
                case 'moreThen1000':
                    return items.filter(item=>item.salary>1000)
                default:
                    return items
            }
        }

    onUpdateFilter = (filter) => { 
        this.setState({filter: filter})
    }

    onToggleRise = (id) => {
       
        this.setState(({data})=>({
            data: data.map(item=>{
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item
            })
        }))
    }

    onUpdateSalary = (name, salary) => {
        
        this.setState(({data})=>({
            data: data.map(item=>{
                if (item.name === name) {
                    console.log(name);
                    console.log(salary);
                    return {...item, salary: salary}
                }
                return item
            })
        }))
    }

    // onUpdateSalary = (salary) => {
    //     this.setState(({data})=>{
    //         data[]
    //     })
    // }

    onChangeSalary = (id, salary) => {
        this.setState(({ data }) => ({
          data: data.map((item) => {
            if (item.id === id) {
              return { ...item, salary: parseInt(salary) };
            }
            return item;
          }),
        }));
      };

    render() {
        const {data,term,filter} = this.state;
        // const salary = this.state.data[1].salary;
        const employees = this.state.data.length;
        const getPrem = this.state.data.filter(item => item.increase === true).length;
        const visibleData = this.filterPost(this.searchEmp(data,term), filter);
        console.log(typeof(this.onUpdateSalary));
        // console.log(salary);

        return (
            <div className="app">
                <AppInfo 
                    employees = {employees}
                    getPrem = {getPrem}
                />
    
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter 
                      filter={filter}
                      onUpdateFilter = {this.onUpdateFilter}
                    />
                </div>
    
                
                <EmploersList 
                    data = {visibleData}
                    onDelete = {this.deleteItem}
                    onToggleIncrease = {this.onToggleIncrease}
                    onToggleRise = {this.onToggleRise}
                    onUpdateSalary = {this.onUpdateSalary}
                    onChangeSalary = {this.onChangeSalary}
                    
                />
    
                <EmployersAddForm
                    onAdd = {this.addItem}
                />

                {/* <button onClick={this.show}>+++</button> */}
                
            </div>
        );
    }
}

export default App;