import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGES_SIZES } from '../../constant/images-sized';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemData: Movie | null = null;

  imagesSizes = IMAGES_SIZES;
}
