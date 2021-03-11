import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      disableEdit: false,
      editId: undefined,
      list: [],
    };
  }

  changeInput = (value) => {
    this.setState({
      userInput: value,
    });
  };

  addToList = () => {
    let arrList = this.state.list;
    const value = this.state.userInput;
    arrList.push(value);
    this.setState({
      list: arrList,
      userInput: "",
      disableEdit: false,
      editId: undefined,
    });
  };

  removeFromList = (id) => {
    const arrList = this.state.list.filter(function (value, index) {
      return id !== index;
    });
    this.setState({
      list: arrList,
    });
  };

  editFromList = () => {
    let arrList = this.state.list;
    const id = this.state.editId;
    const value = this.state.userInput;
    arrList[id] = value;
    this.setState({
      list: arrList,
      disableEdit: false,
      editId: undefined,
    });
  };

  prepareEdit = (id, val) => {
    this.setState({
      disableEdit: true,
      editId: id,
      userInput: val,
    });
  };

  render() {
    const editButton = this.state.disableEdit ? (
      <button
        className="reinserta"
        disable={this.state.disableEdit}
        onClick={() => this.editFromList()}
      >
        Reinserta info a la fila
      </button>
    ) : (
      ""
    );
    return (
      <div className="animation-area">
        <div className="app">
          <h1 className="italic">
            Favor de escribir la informacion del empleado en el siguiente orden:
            <br />
            "Nombre - Teléfono - NSS - RFC"
          </h1>
          <input
            type="text"
            value={this.state.userInput}
            onChange={(e) => this.changeInput(e.target.value)}
            placeholder="    Nombre - Teléfono - NSS - RFC"
          />
          <button className="enviar" onClick={() => this.addToList()}>
            Enviar
          </button>
          {editButton}
          <ul>
            {this.state.list.map((val, index) => (
              <li className="result">
                {`${index + 1}.- ${val}   `}
                <button
                  className="editar"
                  id={index}
                  onClick={(e) => this.prepareEdit(index, val)}
                >
                  Editar
                </button>
                <button
                  className="borrar"
                  id={index}
                  onClick={(e) => this.removeFromList(index)}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default App;
