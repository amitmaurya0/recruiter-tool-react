import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const MultiSelectDropdown = ({ options=[], selectedOptions=[], onChange }) => {


  return (
    <div className="w-full mb-4">
      <label className="block text-sm font-semibold text-gray-600 mb-1">
        Select Options
      </label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        components={animatedComponents}
        options={options}
        className="basic-multi-select w-full"
        classNamePrefix="select"
        onChange={onChange}
        value={selectedOptions}
      />
    </div>
  );
};

export default MultiSelectDropdown;
