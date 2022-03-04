import './app-info.css';


const AppInfo = ({employees, getPrem})=> {
    
    // const {employees, getPrem} = props;
    
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Sky</h1>
            <h2>Общее число сотрудников: {employees} </h2>
            <h2>Премию получат: {getPrem}</h2>
        </div>
    );
}

export default AppInfo