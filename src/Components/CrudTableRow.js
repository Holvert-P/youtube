import React from "react";
import { useNavigate } from "react-router-dom";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { title, auth, id, edition } = el;
  const navigate = useNavigate();
  const handleEdit = () => {
    setDataToEdit(el);
    navigate(`/edit/${id}`);
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{auth}</td>
      <td>{edition}</td>
      <td>
        <button className="btn-edit" onClick={handleEdit}>
          Editar
        </button>
        <button className="btn-delete" onClick={() => deleteData(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
