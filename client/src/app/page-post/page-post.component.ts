import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

interface IPost {
  id: string,
  title: string,
  text: string,
  date: Date,
}

@Component({
  selector: 'app-page-post',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent implements OnInit {
  post: IPost = {
    id: 'sda13123',
    title: 'Test title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut maxime molestias mollitia obcaecati, odit rerum tempore totam voluptatibus. Aperiam fugit illum numquam quasi vitae. Accusantium aperiam consequatur debitis, dicta ducimus exercitationem facere fugit hic incidunt iusto labore minus odio placeat porro quae quaerat quia quidem saepe, similique soluta temporibus vitae voluptatem. Consequuntur doloribus eaque eius et hic ipsa, ipsam laudantium natus officiis? Adipisci aperiam consectetur earum eius esse facilis illum inventore laudantium perspiciatis quo quod recusandae repudiandae, sed sint sit tenetur veniam. Aliquam cum, cupiditate facilis inventore iure non qui rerum veniam veritatis voluptatibus. Aspernatur delectus sed ullam voluptatibus.',
    date: new Date()
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
