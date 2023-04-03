// import {SchemaItem} from "../models/schema-item";
// import {StringSchema} from "yup";
// import {useEffect, useRef} from "react";
// import tinymce from "tinymce";
// import {Editor} from "@tinymce/tinymce-react";
//
// export interface TextBoxProps {
//     schemaKey: string,
//     schema: SchemaItem,
//     uiSchema?: any,
//     value?: string,
//     handleChange: (value: string) => void,
//     validation?: StringSchema,
//     type?: 'text' | 'password'
// }
//
import {TextBoxProps} from "./TextBox";

export default function ({schemaKey, schema, uiSchema, value, handleChange, validation}: TextBoxProps) {
    return <div>not completed</div>
}
//     const editorRef = useRef(null);
//     useEffect(() => {
//         // tinymce.init({
//         //     selector: 'textarea#open-source-plugins',
//         //     plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
//         //     editimage_cors_hosts: ['picsum.photos'],
//         //     menubar: 'file edit view insert format tools table help',
//         //     toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
//         //     toolbar_sticky: true,
//         //     autosave_ask_before_unload: true,
//         //     autosave_interval: '30s',
//         //     autosave_prefix: '{path}{query}-{id}-',
//         //     autosave_restore_when_empty: false,
//         //     autosave_retention: '2m',
//         //     image_advtab: true,
//         //
//         // });
//     })
//     return <>
//         {/*<textarea id="open-source-plugins"></textarea>*/}
//
//         <Editor
//             apiKey="zseh53a80lsga4zcgqyp53puco8n60amr97qrc184xrav185"
//             onInit={(evt, editor) => editorRef.current = editor}
//             // initialValue={value}
//             init={{
//                 height: 500,
//                 menubar: false,
//                 // plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
//                 plugins: 'preview image link media template codesample charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
//                 toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist' ,
//                 // toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
//                 // skin: 'oxide',
//                 // content_css: 'default',
//                 // content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
//                 toolbar_sticky: false,
//
//                 // useDarkMode ? 'oxide-dark' : 'oxide',
//
//                 // plugins: [
//                 //     // 'advlist autolink lists link image charmap print preview anchor',
//                 //     // 'searchreplace visualblocks code fullscreen',
//                 //     // 'insertdatetime media table paste code help wordcount'
//                 // ],
//                 // toolbar: 'formatselect| undo redo | bold italic underline strikethrough ' +
//                 //     '| fontselect fontsizeselect formatselect ' +
//                 //     '| alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
//
//                 // toolbar: 'undo redo | formatselect | ' +
//                 //     'bold italic backcolor | alignleft aligncenter ' +
//                 //     'alignright alignjustify | bullist numlist outdent indent | ' +
//                 //     'removeformat | help',
//             }}
//             onChange={(e) => {
//                 debugger;
//                 handleChange(editorRef.current.getContent());
//             }}
//         />
//     </>
//
//     // const onChange = (e: string) => {
//     //     let errs: string[] = []
//     //     try {
//     //         validation?.validateSync(e)
//     //     } catch (err: any) {
//     //         errs = err.errors
//     //     }
//     //     handleChange(e, errs)
//     // }
// }

