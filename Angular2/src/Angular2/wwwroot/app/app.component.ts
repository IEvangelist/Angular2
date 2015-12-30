import {Component} from 'angular2/core';
import {UiTabs, UiPane} from './tabs';
@Component({
    selector: 'app',
    template: `
    <h2>Angular 2</h2>
    <hr/>
    <br/>
    <ui-tabs>
      <template ui-pane title='Overview' isActive="true">
        <br/>            
        You have {{details.length}} details.
      </template>
      <template *ngFor="#detail of details" ui-pane [title]="detail.title">
        <br/>
        {{detail.text}} <br><br>
        <button class="btn" (click)="removeDetail(detail)">Remove</button>
      </template>
      <template ui-pane title='Summary'>
        <br/>
        Next last ID is {{id}}.
      </template>
    </ui-tabs>
    <hr/>
    <button class="btn" (click)="addDetail()">Add Detail</button>
    `,
    directives: [UiTabs, UiPane]
})
export class AppComponent {
    details: any[] = [];
    id = 0;
    addDetail() {
        ++ this.id;
        this.details.push({
            title: `Detail ${this.id}`,
            text: `Some detail text for ${this.id}...`
        });
    }
    removeDetail(detail) {
        this.details = this.details.filter((d) => d !== detail);
    }
}