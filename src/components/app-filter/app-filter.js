import './app-filter.css';


const AppFilter = (props) => {
        const btnData = [
            {name: 'all', label:'Все сотрудники'},
            {name: 'rise', label:'На повышение'},
            {name: 'moreThen1000', label:'З/П больше 1000$'},
        ]

        const buttons = btnData.map(({name, label}) => {

            const active = 'btn-light';
            const notActive = 'btn-outline-light'
            let clazz = ''
            if (props.filter === name) {
                clazz = active;
            } else {
                clazz = notActive;
            }
            
            return (
                <button 
                    className={`btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={()=>props.onUpdateFilter(name)}
                    >
                    {label}
                </button>
            )
        })
       
        return (
           
            <div className="btn-group">
                {buttons}
                {/* <button 
                    className="btn btn-light"
                    type="button">
                        Все сотрудники
                </button>
                <button 
                    className="btn btn-outline-light inc"
                    type="button"
                    onClick={this.filterIncrease}
                    >
                        На повышение
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    onClick={this.filterSalary}
                    >
                        З/П больше 1000$
                </button> */}
            </div>

        );       
}

export default AppFilter