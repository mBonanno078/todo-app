import './AppTodo.scss';
import HeaderTodo from '../Header/HeaderTodo';
import FormTodo from '../FormTodo/FormTodo';

const AppTodo = () => {
  return (
    <div className="container-todo-app">
      <HeaderTodo/>
      <FormTodo/>
    </div>
  );
}

export default AppTodo;
