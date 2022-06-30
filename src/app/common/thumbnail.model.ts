import { Category } from './category.model';

export class Thumbnail {
  constructor(
    public picture: string,
    public title: string,
    public avatar: string,
    public author: string,
    public views: number,
    public viewers: number,
    public timestamp: string,
    public category: Category,
    public isCertified: boolean,
    public isLive: boolean
  ) {}
}
