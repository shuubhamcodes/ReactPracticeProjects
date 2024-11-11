
import React from 'react';

const FormInput = ({ label, name, type, value, onChange, error }) => (
    <div>
        <label>{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} />
        {error && <p>{error}</p>}
    </div>
);

export default FormInput;
