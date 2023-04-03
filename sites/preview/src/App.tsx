import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {Form, Button} from "@ahmed.ahmed/ez-forms";
import {Schema, SchemaItem, UiSchema} from "@ahmed.ahmed/ez-forms/src/lib/models/schema-item";
import {string} from "yup";
import {Form} from "@ahmed.ahmed/ez-forms";
// import {} from "@ahmed.ahmed/ez-forms/src/lib";

// import {Button} from "@ahmed.a";


function App() {
    const [count, setCount] = useState(0);

    const emailSchema: SchemaItem = {
        type: "string", title: "Email"
    }

    const firstNameSchema: SchemaItem = {
        type: "string", title: "First Name",
        validation: string().nonNullable().min(12).max(20)
    }

    const formSchema: Schema = {
        type: "object",
        properties: {
            firstName: firstNameSchema,
            email: emailSchema,
            message: {
                type: "string",
                title: "Message"
            }
        }
    }
    const formUiSchema: UiSchema = {
        message: {uiWidget: "textarea"}
    }


    return <Form schema={formSchema} uiSchema={formUiSchema}/>


}

export default App
