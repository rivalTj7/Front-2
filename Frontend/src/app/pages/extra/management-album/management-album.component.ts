import { Component, Inject } from '@angular/core';
import {Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import {MatCardImage} from "@angular/material/card";
import {MatChip} from "@angular/material/chips";
import {CommonModule, NgForOf} from "@angular/common";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";

@Component({
    selector: 'app-management-album',
    standalone: true,
    imports: [
        MatCardImage,
        MatChip,
        MatDialogContent,
        MatDialogTitle,
        NgForOf,
        MatFormField,
        MatLabel,
        ReactiveFormsModule,
        FormsModule,
        MatError,
        MatButton,
        CommonModule,
        MatInput,
        MatOption,
        MatSelect
    ],
    templateUrl: './management-album.component.html',
    styleUrls: ['./management-album.component.scss']
})
export class ManagementAlbumComponent {
    albumForm: FormGroup;
    deleteAlbumForm: FormGroup;
    updateAlbumForm: FormGroup;

    albumes = [
        {value: 'album1', viewValue: 'Album 1'},
        {value: 'album2', viewValue: 'Album 2'},
        {value: 'album3', viewValue: 'Album 3'},
    ];

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<DialogComponentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { name: string, id: string, srcImage: string }
    ) {
        this.albumForm = this.fb.group({
            albumName: ['', Validators.required]
        });

        this.deleteAlbumForm = this.fb.group({
            albumName: ['', Validators.required]
        })

        this.updateAlbumForm = this.fb.group({
            albumName: ['', Validators.required]
        })

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.albumForm.valid) {
            const albumName = this.albumForm.value.albumName;
            // Logic to create album
            console.log('Album Created:', albumName);
            this.dialogRef.close();
        }
    }

    onSubmitDelete(): void {
        if (this.deleteAlbumForm.valid) {
            const albumName = this.deleteAlbumForm.value.albumName;
            // Logic to delete album
            console.log('Album Deleted:', albumName);
            this.dialogRef.close();
        }
    }

    onSubmitUpdate(): void {
        if (this.updateAlbumForm.valid) {
            const albumName = this.updateAlbumForm.value.albumName;
            // Logic to update album
            console.log('Album Updated:', albumName);
            this.dialogRef.close();
        }
    }
}