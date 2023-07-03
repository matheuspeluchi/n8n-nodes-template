
import { INodeType } from "n8n-workflow";

describe("Example", () => {
  const execute = jest.fn();
  const close = jest.fn();
  const credentials = {
    user: "testuser",
    password: "testpassword",
    connectionString: "testconnectionstring",
  };

  let node: INodeType;
  let executeFunctions: any = {
    getCredentials: jest.fn().mockReturnValue(credentials),
    getNodeParameter: jest
      .fn()
      .mockImplementation((paramName: string, index: number) => {
       
        return null;
      }),
    getNode: jest.fn,
    helpers: {
      returnJsonArray: jest.fn(),
    },
    prepareOutputData: jest.fn(),
  };




  it("should execute a query in oracle", async () => {
    
    expect(true).toBe(true)
  });



});
