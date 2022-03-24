import React from 'react'
import { Input } from './Input';
import { Select } from './Select';
import { Textarea } from './Textarea';
import { DatePicker } from './DatePicker';
import { RadioButton } from './RadioButton';
import { CheckboxGroup } from './CheckboxGroup';

export const FormikControl = (props) => {
    const { control, ...rest } = props;

    switch(control) {
        case 'input':       return <Input {...rest} />
        case 'textarea':    return <Textarea {...rest} />
        case 'select':      return <Select {...rest} />
        case 'radio':       return <RadioButton {...rest} />
        case 'checkbox':    return <CheckboxGroup {...rest} />
        case 'date':        return <DatePicker {...rest} />
        default:            return null;
    }
}
