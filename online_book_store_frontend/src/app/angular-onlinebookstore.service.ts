import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AngularOnlinebookstoreService {
  url: string = 'http://localhost:8085';

  category:any = [{
    name: "FICTION", value: 0,
  },{
    name: "NONFICTION", value: 1,
  },{
    name: "MYSTERY", value: 2,
  },{
    name: "BIOGRAPHY", value: 3,
  },{
    name: "POETRY", value: 4,
  },{
    name: "AUTOBIOGRAPHY", value: 5,
  },{
    name: "HISTORY", value: 6,
  },{
    name: "COOKBOOK", value: 7,
  }]
  
  constructor(
    private http: HttpClient,
    private router: Router
  ){}
  
  /* Client Registeration */
  signUp(body: any): Observable<any> {
    return this.http.post(this.url + "/api/customers/register", body);
  }
  //client login
  customerSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/customers/login", body);
  }
  //once we logged in that time we are storing client id into token 
  storeCustomerAuthorization(token: string): void {
  localStorage.setItem("token", token);
  }

  getCustomerAuthorization(): any {
  const token = localStorage.getItem("token");
  return token; 
  }
  storeCustomerUserName(name: string): void {
    localStorage.setItem("userName", name);
  }

  getCustomerName(): any {
    const name = localStorage.getItem("userName");
    return name;
  }

  customerLogout(): void {
    localStorage.clear();
    this.router.navigate(['home']);
  }
  //admin login
  adminSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/admin/login", body);
  }
  storeAdminAuthorization(token: string): void {
    localStorage.setItem("admin", token);
  }
  getAdminAuthorization(): any {
    const token = localStorage.getItem("admin");
    return token; 
  }

  storeAdminUserName(name: string): void {
    localStorage.setItem("adminName", name);
  }

  getAdminName(): any {
    const name = localStorage.getItem("adminName");
    return name;
  }

  adminLogout(): void {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  // this is for getting username in admin.home.html part
  isAdminLoginPresent(): void{
    if (this.getAdminAuthorization() == null) {
      this.router.navigate(['/admin-login']);
    }
  }
  getAllorderList():Observable<any>{
    return this.http.get(this.url+"/api/orders/");
  }
  
  addItem(body: any): Observable<any>{
    return this.http.post(this.url + "/api/items/add item", body);
  }

  getItemList():Observable<any>{
    return this.http.get(this.url + "/api/items" );
  }

  deleteItem(id: any):Observable<any>{
    return this.http.delete(this.url + "/api/items/" + id );
    // secondway
    // return this.http.delete('${this.url} /api/items/${id}");
    }
  getItemById(id:any):Observable<any>{
      return this.http.get(this.url + "/api/items/item/"+id );
  }

  editItem(body: any,id:any): Observable<any> {
    return this.http.put(this.url + "/api/items/"+id, body);
  }
  getCategoryList(): any {
    return this.category;
  }
  forgotPassword(body: any):Observable<any> {
    return this.http.post(this.url + "/api/customers/forgotpassword", body);
  }
  changePassword(cid: any,password:any):Observable<any> {
    return this.http.post(this.url + "/api/customers/"+cid+"/"+password,{});
  }
  addPayment(body:any,orderid:any,cid:any):Observable<any> {
    return this.http.post(this.url + "/api/payements/"+orderid+"/"+cid, body);
  }
  getAllItems(offset: any, limit: any):Observable<any>{
    return this.http.get(this.url+"/api/items/" + offset + "/" + limit);
    }
    
  isCustomerLoginPresent(): void {
    if (this.getCustomerAuthorization() === null) {
      this.router.navigate(['/client-login']);
    }
  }
  getItemByCategory(cid: any, offset: any, limit: any):Observable<any>{
    return this.http.get(this.url+"/api/items/" + cid + "/"+ offset + "/" + limit);
    }
  
  updateCustomerInformation(body: any):Observable<any> {
    return this.http.put(this.url + "/api/customers/customer/"+body?.customerId, body);
  }

  getCustomerById(id:any):Observable<any> {
    return this.http.get(this.url + "/api/customers/customer/"+id);
  }
  
  placeOrderItem(cid:any, body:any):Observable<any>{
    return this.http.post(this.url + "/api/orders/addOrder/"+cid+"/", body);
  }

  placeOrder(cid:any,cartid:any,body:any):Observable<any> {
    return this.http.post(this.url + "/api/orders/"+cid+"/"+cartid, body);
  }


  orderList(id:any):Observable<any>{
    return this.http.get(this.url+"/api/orders/"+id);
  }
  addToCart(body: any,pid:any,cid:any):Observable<any>{
    return this.http.post(this.url+"/api/cart/"+cid+"/"+pid,body);
    }

cartList():Observable<any>{
return this.http.get(this.url+"/api/cart/list");
}

deleteCart(id :any):Observable<any> {
return this.http.delete(`${this.url}/api/cart/${id}`);
}



}


