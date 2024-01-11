import { Component } from '@angular/core';
import {BannerComponent} from "../../components/banner/banner.component";
import {LanguageComponent} from "../../components/language/language.component";
import {SkillsComponent} from "../../components/skills/skills.component";
import {ContactComponent} from "../../components/contact/contact.component";
import {EducationComponent} from "../../components/education/education.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BannerComponent,
    LanguageComponent,
    SkillsComponent,
    ContactComponent,
    EducationComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
