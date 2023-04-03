import {TextBox, TextBoxProps} from "./TextBox";
import {string} from "yup";

export default function ({schemaKey, schema, uiSchema, value, handleChange, validation}: TextBoxProps) {
    let emailValidation = string().matches(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, {message: 'Email format is not correct'});
    const onChange = (e: string, validationErrors: string[]) => {
        let errs: string[] = []
        try {
            emailValidation.validateSync(e)
        } catch (err: any) {
            errs = validationErrors.concat(err.errors)
        }
        handleChange(e, errs)
    }

    return <TextBox schemaKey={schemaKey}
                    schema={schema}
                    uiSchema={uiSchema}
                    value={value}
                    validation={validation}
                    handleChange={(v, e) => onChange(v, e)}
    />
}
