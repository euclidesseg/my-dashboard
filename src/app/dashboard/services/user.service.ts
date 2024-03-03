import { Injectable, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestUser, User, UserResponse } from '../interfaces/request-response';
import { Observable, delay } from 'rxjs';

interface State{
  users:User[] | undefined;
  loading:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //# La idea de esta clase es que es bien conveniente trabajar con señales 
  //# para manejar el estado de nuestra aplicacion
  //# y la parte de las peticiones hacerlas con rxjs
  private baseUrl = 'https://reqres.in/api/users';

  #state = signal<State>({
    users:[],
    loading:true,

  })
  

  //# Nosotros necesitamos ver los usuarios en el componente html pero para importarlo como hacemos si la señal que lo contiene
  //# es privada y solo se puede usar en este servicio es aqui donde usamos las señales

  public users = computed(() => this.#state().users) //? esta es una señal computada de solo lectura que contiene los usuarios
  constructor(private http:HttpClient) { 
    this.getUsers()
    .pipe(delay(1500))
    .subscribe(res =>{
      this.#state.set({
        loading:false,
        users:res?.data
      })
    })
  }

  public getUsers():Observable<UserResponse|undefined>{
    return this.http.get<UserResponse>(`${this.baseUrl}`)
  }
  public getUserById(param:number):Observable<RequestUser>{
    return this.http.get<RequestUser>(`${this.baseUrl}/${param}`)
  }
}
