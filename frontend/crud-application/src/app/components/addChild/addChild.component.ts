import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Child } from '../../service/Child';

@Component({
    selector: 'app-addChild',
    templateUrl: './addChild.component.html',
    styleUrls: ['./addChild.component.scss']
})
export class AddChildComponent implements OnInit {
    childForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private ngZone: NgZone,
        private crudService: CrudService
    ) {
        this.childForm = this.formBuilder.group({
            name: ['', Validators.required],
            user_id: ['', Validators.required]
        });


    }

    ngOnInit() {}

    onSubmit(): any {
        console.log(this.childForm.value); // Hier wird das Formular-Objekt ausgegeben
        this.crudService.addChild(this.childForm.value).subscribe(

            () => {
                console.log('Child added successfully!');
                //this.ngZone.run(() => this.router.navigateByUrl('/users-list'));
            },
            (err) => {
                console.log(err);
            }
        );
    }

}
