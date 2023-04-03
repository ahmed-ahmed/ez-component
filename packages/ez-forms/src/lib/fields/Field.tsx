import {useState} from "react";
import {SchemaItem, UiSchemaItem} from "../models/schema-item";
import {StringSchema} from "yup";

export interface IFieldProps {
    component: any;
    schema: SchemaItem
    uiSchema?: UiSchemaItem,
    schemaKey: string,
    validation?: any,
    handleChange?: (value: string, validationErrors: string[]) => void,
    value?: any
}

export function Field({component, schema, schemaKey, handleChange, value, uiSchema}: IFieldProps) {
    const [componentValue, setComponentValue] = useState(value)
    const [errors, setErrors] = useState<string[]>([])
    const Component = component

    const onchange = (value: string, validationErrors: string[]) => {
        setComponentValue(value);
        setErrors(validationErrors);
        handleChange?.(value, validationErrors);
    }

    return <div className="flex gap-6 items-start mb-6">
        <label className="text-lg mt-1 w-32">{schema.title}</label>
        <div className='w-full'>
            <Component
                schemaKey={schemaKey}
                uiSchema={uiSchema}
                schema={schema}
                validation={schema.validation}
                value={componentValue}
                handleChange={onchange}/>
            <div className="text-red-500">
                <ul>
                    {errors?.map(e => <li key={e}>{e}</li>)}
                </ul>
            </div>
        </div>
    </div>
}
