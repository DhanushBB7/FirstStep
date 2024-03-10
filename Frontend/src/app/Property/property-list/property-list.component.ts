import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {

  Properties:Array<any>= [
    {
    "id":1,
    "name":"My house",
    "type":"house",
    "price":300000

    },

    {
      "id":2,
      "name":"My house 2",
      "type":"house",
      "price":30000
  
      },

      {
        "id":3,
        "name":"My house 3",
        "type":"house",
        "price":200000
    
        },

        {
          "id":4,
          "name":"My house 4",
          "type":"house",
          "price":240000
      
          },

          {
            "id":5,
            "name":"My house 5",
            "type":"house",
            "price":340000
        
            },

            {
              "id":6,
              "name":"My house 6",
              "type":"house",
              "price":110000
          
              },

]

  constructor(){}
  ngOnInit(): void {
    
  }

}
