import { ICredentialType, INodeProperties } from "n8n-workflow";

export class Oracle implements ICredentialType {
  name = "exampleCredentials";
  displayName = "Example Credentials";
  documentationUrl = "exampleCredentials";
  properties: INodeProperties[] = [
    {
      displayName: "User",
      name: "user",
      type: "string",
      default: "system",
    },
    {
      displayName: "Password",
      name: "password",
      type: "string",
      typeOptions: {
        password: true,
      },
      default: "",
    },
  ];
}
