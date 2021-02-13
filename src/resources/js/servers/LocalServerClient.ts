import AbstractServerClient from "./AbstractServerClient";
import { NodeDescription } from "../NodeDescription";

export default class LocalServerClient extends AbstractServerClient {
    sayHi() : void {
        alert("HI!")
    }

    boot() {
        return new Promise((callback) => {
            return callback({
                data: {
                    stories: [],
                    capabilities: {
                        availableNodes: [
                            NodeDescription.deserialize({
                                category: 'Fake',
                                editableInPorts: false,
                                editableOutPorts: false,
                                inPorts: [],
                                outPorts: ['Output'],
                                key: 'test-key',
                                name: 'TypeScriptTest',
                                nodeReact: 'Node',
                                parameters: [
                                    {
                                        default: "TypeScriptTest",
                                        fieldType: "String_",
                                        name: "node_name",
                                        placeholder: "",
                                        value: "TypeScriptTest",
                                    }
                                ],
                                summary: 'ajthinking is learning typescript',
                            })
                        ]
                    }                    
                }
            })
        })
    }

    run() {
        return new Promise((callback) => {
            return alert("Not implemented")
            return callback({
                // data: {
                //     stories: [],
                //     capabilities: {
                //         availableNodes: []
                //     }                    
                // }
            })
        })        
    }
}