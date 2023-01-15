import './ModalMenu.scss';

interface ModalMenuInterface {
  show: boolean;
}

const ModalMenu = (props: ModalMenuInterface) => {
  const {show} = props;
  return (
    <div className={`container-modal-menu ${show ? "open": ''}`}>
      <div className="container-todo-app">
        <ul className="content-list-type-task">
          <h2 className="title-type-task">
            Type task
          </h2>
          <li className="item-list">
            <a href="/" className="list-status">Progress</a>
          </li>
          <li className="item-list">
            <a href="/" className="list-status">Done</a>
          </li>
          <li className="item-list">
            <a href="/" className="list-status">Pennding</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ModalMenu;
