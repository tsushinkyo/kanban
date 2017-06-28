/* tslint:disable */

declare var Object: any;
export interface TaskInterface {
  "tittle": string;
  "description": string;
  "bag": string;
  "remedy"?: string;
  "jira"?: string;
  "commentList"?: any;
  "id"?: any;
}

export class Task implements TaskInterface {
  "tittle": string;
  "description": string;
  "bag": string;
  "remedy": string;
  "jira": string;
  "commentList": any;
  "id": any;
  constructor(data?: TaskInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Task`.
   */
  public static getModelName() {
    return "Task";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Task for dynamic purposes.
  **/
  public static factory(data: TaskInterface): Task{
    return new Task(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Task',
      plural: 'tasks',
      properties: {
        "tittle": {
          name: 'tittle',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "bag": {
          name: 'bag',
          type: 'string'
        },
        "remedy": {
          name: 'remedy',
          type: 'string'
        },
        "jira": {
          name: 'jira',
          type: 'string'
        },
        "commentList": {
          name: 'commentList',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
