import { Component } from "@angular/core";

@Component({

selector:'app-property-card',
//template :'<h1> I am BB mhg<h1>',
templateUrl:'property-card.component.html',
//styles:['h1{font-weight:normal;}'],
styleUrls:['property-card.component.css']
}
)

export class PropertyCardComponent{
Property:any={
    "id":1,
    "name":"My house",
    "type":"house",
    "price":300000

}

}