import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  listAndroid:{ img: string, title: string}[] = [
    {title:'Flutter',img:'../../assets/images/icons/Flutter.svg'},
    {title:'Java',img:'../../assets/images/icons/java.svg'},
    {title:'Kotlin',img:'../../assets/images/icons/kotlin.svg'},
  ]
  listFrontend:{ img: string, title: string}[] = [
    {title:'Angular',img:'../../assets/images/icons/angular.svg'},
    {title:'Next Js',img:'../../assets/images/icons/nextjs.svg'},
    {title:'Tailwinds',img:'../../assets/images/icons/tailwins.svg'},
    {title:'React',img:'../../assets/images/icons/react.svg'},
    {title:'JavaScript',img:'../../assets/images/icons/js.svg'}
  ]
  listBackend:{ img: string, title: string}[] = [
    {title:'Node Js',img:'../../assets/images/icons/nodejs.svg'},
    {title:'Spring',img:'../../assets/images/icons/spring.svg'},
    {title:'GraphQL',img:'../../assets/images/icons/graphQL.svg'},
    {title:'Django',img:'../../assets/images/icons/mySql.svg'},
    {title:'MongoDB',img:'../../assets/images/icons/mongo.svg'},
    {title:'Postgresql',img:'../../assets/images/icons/postgreSql.svg'},
    {title:'Firebase',img:'../../assets/images/icons/firebase.svg'}
  ]
  listOther:{ img: string, title: string}[] = [
    {title:'Aws',img:'../../assets/images/icons/aws.svg'},
    {title:'Git',img:'../../assets/images/icons/git.svg'},
    {title:'GitHub',img:'../../assets/images/icons/GitHub-icon.svg'},
    {title:'Docker',img:'../../assets/images/icons/docker.svg'},
    {title:'Kubernetes',img:'../../assets/images/icons/k8s.svg'},
    {title:'Jenkins',img:'../../assets/images/icons/jetkins.svg'},
  ]
}
