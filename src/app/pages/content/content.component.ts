import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { dataFake } from '../../data/data';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

      @Input()
      photoCover: string = '';
      @Input()
      contentTitle: string = '';
      @Input()
      contentDescription: string = '';

      private id: string | null = '0';

      constructor(
        private route: ActivatedRoute
      ) {

      }

      ngOnInit() {
        this.route.params.subscribe(params => {
          this.id = params['id'] || '0';
          this.setValuesToComponent(this.id);
          console.log(params['id']);
        });
      }

      setValuesToComponent(id: string | null) {

        const result = dataFake.find((element) => {
          return element.id.toString() == id;
        });

        if (result) {
          this.contentTitle = result.title;
          this.contentDescription = result.description;
          this.photoCover = result.photo;
        }


      }

}
