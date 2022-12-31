import {Injectable} from "@angular/core";
import {CostParams} from "./cost-params";
import {HttpClient} from "@angular/common/http";
import {CostDTO} from "./cost.dto";
import {ApiUrl} from "../../http/api-url";

@Injectable({providedIn: "root"})
export class CostReportsHttpService {

  constructor(private readonly http: HttpClient) {
  }

  public getCost(params: CostParams): Promise<CostDTO> {
    return this.http.get<CostDTO>(ApiUrl.builder("cost")
    .build().endpoint, {params: params.toHttpParams()}).toPromise();
  }
}
