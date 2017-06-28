/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Task } from '../../models/Task';
import { Comment } from '../../models/Comment';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Task: Task,
    Comment: Comment,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
