import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


    @Injectable({
        providedIn: 'root'
    })
export class UserService {
     user : any = {}
    constructor(public httpClient: HttpClient) { }

    getData = (): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "https://jsonplaceholder.typicode.com/users";
            this.httpClient.get(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    deleteData= (): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8080/delete/{id}";
            this.httpClient.delete(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    createData= (): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = "http://localhost:8080/create";
            this.httpClient.post(url, this.user)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
  
}