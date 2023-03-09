import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { ParentComponent } from './parent/parent.component'
import { ChildrenComponent } from './parent/children/children.component'

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildrenComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
