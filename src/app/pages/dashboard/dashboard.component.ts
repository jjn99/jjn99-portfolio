import { Component } from '@angular/core';
import {LanguageBannerComponent} from "../../components/language-banner/language-banner.component";
import {SkillsComponent} from "../../components/skills/skills.component";
import {ContactComponent} from "../../components/contact/contact.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    LanguageBannerComponent,
    SkillsComponent,
    ContactComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
