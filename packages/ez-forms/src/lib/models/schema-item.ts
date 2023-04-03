export interface SchemaItem {
    type: string,
    title: string,
    helpText?: string
    defaultValue?: string,
    validation?: any
}

export interface UiSchemaItem {
    uiWidget: string,
    placeHolder?: string,
}

export interface TextUiSchemaItem extends UiSchemaItem {
    uiWidget: 'text' | 'textarea',
}

export interface Schema {
    type: string,
    properties: { [key: string]: SchemaItem },
}

export interface UiSchema {
    [key: string]: UiSchemaItem,
}
