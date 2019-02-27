import React from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    MenuItem
} from '@material-ui/core';
import { ChangeEvent } from 'react';

const MethodSelect: React.FunctionComponent<{
    method: String;
    onChangeHundler: Function;
}> = ({ method, onChangeHundler }) => {
    const methods: Array<string> = ['GET', 'POST', 'PUT', 'DELETE'];

    const hundleMethodChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChangeHundler(event.target.value);
    };

    return (
        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-method-simple">Method</InputLabel>
            <Select
                value={method}
                onChange={hundleMethodChange}
                input={
                    <OutlinedInput
                        labelWidth={60}
                        name="age"
                        id="outlined-method-simple"
                    />
                }
            >
                {methods.map((methodStringName: string, index: number) => (
                    <MenuItem key={index} value={methodStringName}>
                        {methodStringName}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MethodSelect;
