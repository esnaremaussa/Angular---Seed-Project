import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
	selector: 'courses',
	template: `
	<i
			class="glyphicon-star"
			[class.glyphicon-star-empty]="!isFavorite"
			[class.glyphicon-star]="isFavorite"
			(click)="onClick()"
		>
		<p>-------------</p>
		<h2>Courses</h2>
		{{ title }}

		</i>
		<input type="text" autoGrow />
		<ul>
			<li *ngFor="#course of courses">
				{{ course }}
			</li>
		</ul>
	`,
	providers: [CourseService],
	directives: [AutoGrowDirective]
})
export class CoursesComponent {
	title = "the Title of courses page";
	isFavorite = false;
	courses;

	constructor(courseService : CourseService){
		this.courses = courseService.getCourses();
	}
	
	onClick(){
		this.isFavorite = !this.isFavorite;
	}
}