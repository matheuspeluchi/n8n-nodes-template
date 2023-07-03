import { IExecuteFunctions } from "n8n-core";

import {
  IDataObject,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  NodeOperationError,
} from "n8n-workflow";

export class Example implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Oracle Database",
    name: "Oracle Database",
    icon: "file:oracle.svg",
    group: ["input"],
    version: 1,
    description: "Upsert, get, add and update data in Oracle database",
    defaults: {
      name: "Oracle Database",
    },
    inputs: ["main"],
    outputs: ["main"],
    credentials: [ ],
    properties: [],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

    const returnItems = [] as unknown as IDataObject[]

    return this.prepareOutputData(returnItems);
  }
}
