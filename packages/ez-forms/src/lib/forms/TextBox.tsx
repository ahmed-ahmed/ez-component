import {SchemaItem, TextUiSchemaItem} from "../models/schema-item";
import {StringSchema} from "yup";

export interface TextBoxProps {
    schemaKey: string,
    schema: SchemaItem,
    uiSchema?: TextUiSchemaItem,
    value?: string,
    handleChange: (value: string, validationErrors: string[]) => void,
    validation?: StringSchema,
    type?: 'text' | 'password' | 'textarea'
}

export function TextBox({schemaKey, schema, uiSchema, value, handleChange, validation, type = 'text'}: TextBoxProps) {
    const onChange = (e: string) => {
        let errs: string[] = []
        try {
            validation?.validateSync(e)
        } catch (err: any) {
            errs = err.errors
        }
        handleChange(e, errs)
    }

    const getControl = (props: any) => {
        switch (uiSchema?.uiWidget) {
            case 'textarea':
                return <textarea {...props}/>
            default:
                return <input type='text' {...props}/>


        }
    }

    const props = {
        className: ' border border-gray-300 py-2 px-4 outline-0 w-full',
        'data-testid': {schemaKey},
        value: value || schema.defaultValue || '',
        onBlur: e => onChange(e.target.value),
        onChange: e => onChange(e.target.value),
        placeholder: uiSchema?.placeHolder || schema.title,

    }

    return <>
        {getControl(props)}
    </>

}
