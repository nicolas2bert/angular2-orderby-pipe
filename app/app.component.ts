import {Component, OnInit} from 'angular2/core';
import {OrderByPipe} from './orderby';

@Component({
    selector: 'my-app',
    template: `
      <h2>orderby-pipe by N2B</h2>
      <p *ngFor="#article of articles | orderby:'!id'">
        Article title : {{article.title}}
      </p>
    `,
    pipes: [ OrderByPipe ]
    
})
export class AppComponent{
	articles:Array<any>
	ngOnInit(){
    	this.articles = [
		{
		    id: 1,
		    title: "title1"
		},{
		    id: 2,
		    title: "title2",
		}]	
	}

}