import React, { useState } from 'react';

const DynamicForm = ({ fieldsConfig, onSubmit }) => {
  const initialFormData = {};
  fieldsConfig.forEach((field) => {
    initialFormData[field.name] = field.defaultValue || '';
  });

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 '>
      {fieldsConfig.map((field, index) => (
        <div key={index} className='flex gap-2 flex-col'>
          <label>{field.label}</label>
          {field.type === 'select' && (
            <select className='text-black p-2 rounded-md w-80' name={field.name} value={formData[field.name] || ''} onChange={handleInputChange} required={field.required}>
              <option value="">Select an option</option>
              {field.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}

          {field.type === 'text' &&  (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleInputChange}
              className='text-black p-2 rounded-md w-80'
              required={field.required}
            />
          )}
        </div>
      ))}
      <button className='bg-white text-slate-600 py-2 font-bold rounded-lg mt-6' type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;