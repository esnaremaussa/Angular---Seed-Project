import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {IconStarComponent} from './icon-star.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Hello Angular</h1>
    	<icon-star></icon-star>
    	<courses></courses>
    	<authors></authors>
    `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { }