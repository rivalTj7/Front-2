import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {DialogComponentComponent} from "../dialog-component/dialog-component.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgForOf, NgIf} from "@angular/common";
import {MatCard, MatCardImage, MatCardModule} from "@angular/material/card";
import {MatChip} from "@angular/material/chips";
import {Vegetable} from "../../ui-components/chips/chips.component";
import {ThumbYDirective} from "ngx-scrollbar/lib/thumb/thumb";

@Component({
  selector: 'app-view-image',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
    MatCardImage,
    MatChip,
    NgForOf,
    ThumbYDirective,
    MatCard,
    MatCardModule
  ],
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss', '../../../../styles.scss']
})
export class ViewImageComponent {

  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

  constructor(
      public dialogRef: MatDialogRef<DialogComponentComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { name: string, id: string, srcImage: string },
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
