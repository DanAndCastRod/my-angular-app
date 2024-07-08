import { Component, OnInit } from "@angular/core";
import { ItemService, Item } from "../item.sevice";


@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit{
    items:Item[] = [];

    constructor(private itemService: ItemService){}

    ngOnInit(): void {
        this.itemService.getItems().subscribe(data=>{
            this.items = data;
        })
    }
}