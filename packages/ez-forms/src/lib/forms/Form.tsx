import {SchemaItem, UiSchemaItem} from "../models/schema-item";
import {Field, TextBox} from "../index";
import {useState} from "react";

export interface IFormProps {
    schema: any,
    uiSchema?: any,
    value?: any,
    handleChange?: (value: any, validationErrors?: string[]) => void
}

export function Form({schema, uiSchema, value, handleChange}: IFormProps) {
    const [formData, setFormData] = useState<any>({});
    const onChangeFormField = (key: string, value: any, validationErrors: string[]) => {
        formData[key] = value;
        setFormData({...formData});
        handleChange && handleChange(formData)
    }


    const component = (schemaItem: SchemaItem, uiSchemaItem: UiSchemaItem, schemaKey: string, valueItem: any) => {
        return <Field
            key={schemaKey}
            schemaKey={schemaKey} schema={schemaItem}
            component={TextBox}
            uiSchema={uiSchemaItem}
            value={valueItem}
            handleChange={(value: string, validationErrors: string[]) => {
                onChangeFormField(schemaKey, value, validationErrors);
            }}
        />
    }

    return <>
        <div>
            value: {JSON.stringify(formData)}
        </div>
        Form:
        {schema && Object.keys(schema.properties).map((schemaKey, index) => {
            const schemaItem: SchemaItem = schema.properties[schemaKey];
            const uiSchemaItem = uiSchema?.[schemaKey];
            const valueItem = value?.[schemaKey] || schemaItem.defaultValue || '';

            switch (schemaItem.type) {
                case 'string':
                    return component(schemaItem, uiSchemaItem, schemaKey, valueItem)
            }
        })
        }
    </>
}
