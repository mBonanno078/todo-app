import './HeaderApp.scss';
import ModalMenu from '../modalMenu/ModalMenu';
import { useState } from 'react';


const HeaderApp = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div className="container-header-todo">
        <div className="container-todo-app">
          <header className="header-todo-app">
            <div className="content-button">
              <button type='button'
                      className="hamburger-menu button"
                      onClick={() => setShow(oldValue => !oldValue)}>
                <span className="line one"></span>
                <span className="line two"></span>
                <span className="line three"></span>
              </button>
            </div>
            <div className="content-logo">
              <h1 className="logo-todo-app">Todo App</h1>
            </div>
          </header>
        </div>
      </div>
      <ModalMenu show={show}/>
    </>
  );
}

export default HeaderApp;
