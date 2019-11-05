import { Category } from 'src/app/event-category/model/category.model';

export class Event{
    eventName: string;
    dueDate: Date;
    place: string;
    eventTime: string; 
    eventDescription: string;
    eventCategory: Category; 
    eventImage: string;
    active: boolean;
}