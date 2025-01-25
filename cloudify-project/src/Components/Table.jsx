import React, { useState } from "react";
import Select from "react-select";
import { FiPlus } from "react-icons/fi";


const Table = () => {
  const [rows, setRows] = useState([{ id: 1, singleSelect: null, multiSelect: [] }]);
  const [singleSelectOptions, setSingleSelectOptions] = useState([
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ]);
  const [multiSelectOptions, setMultiSelectOptions] = useState([
    { value: "Option A", label: "Option A" },
    { value: "Option B", label: "Option B" },
    { value: "Option C", label: "Option C" },
  ]);
  const [newOption, setNewOption] = useState("");

  const handleSingleSelectChange = (rowId, selectedOption) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, singleSelect: selectedOption } : row
      )
    );
    setSingleSelectOptions((prevOptions) =>
      prevOptions.filter((option) => option.value !== selectedOption.value)
    );
  };

  const handleMultiSelectChange = (rowId, selectedOptions) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, multiSelect: selectedOptions || [] } : row
      )
    );
  };

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, singleSelect: null, multiSelect: [] }]);
  };

  const addNewMultiSelectOption = () => {
    if (newOption.trim()) {
      const newOptionObj = { value: newOption, label: newOption };
      setMultiSelectOptions([...multiSelectOptions, newOptionObj]);
      setNewOption("");
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <Select
                  options={singleSelectOptions}

                  value={row.singleSelect}
                  onChange={(selectedOption) =>
                    handleSingleSelectChange(row.id, selectedOption)
                  }
                  placeholder="Select Option"
                />
              </td>
              <td>
                <div className="multi-select-container">
                  <Select
                    isMulti
                    options={multiSelectOptions}
                  
                    value={row.multiSelect}
                    onChange={(selectedOptions) =>
                      handleMultiSelectChange(row.id, selectedOptions)
                    }
                    placeholder="Select Options"
                  />
                  <div className="add-new-item">
                    <input
                      type="text"
                      placeholder="Add new item"
                      value={newOption}
                      onChange={(e) => setNewOption(e.target.value)}
                    />
                    <button onClick={addNewMultiSelectOption}>
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-row-btn" onClick={addRow}>
        <FiPlus /> Add New Row
      </button>
    </div>
  );
};

export default Table;
