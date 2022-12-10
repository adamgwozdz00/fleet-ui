import {environment} from "../../environments/environment";

export class ApiUrl {
  public endpoint: string;
  private additionalEndpointData: string;


  constructor(endpoint: string) {
    this.endpoint = environment.apiHost + endpoint;
  }

  static builder(endpoint: string): ApiUrlBuilder {
    return new ApiUrlBuilder(endpoint);
  }


}

export class ApiUrlBuilder {
  private endpoint: string;
  private additionalEndpointData: string;

  constructor(endpoint: string) {
    this.endpoint = this.cleanUpEndpoint(endpoint);
    this.additionalEndpointData = ""
  }

  withPathVariable(variable: any): ApiUrlBuilder {
    this.additionalEndpointData += ("/" + String(variable));
    return this;
  }

  withAdditionalSegment(pathSegment: string): ApiUrlBuilder {
    this.additionalEndpointData += ("/" + pathSegment);
    return this;
  }

  public build(): ApiUrl {
    return new ApiUrl(this.endpoint + this.additionalEndpointData);
  }

  private cleanUpEndpoint(endpoint) {
    if (endpoint.startsWith("/")) {
      endpoint = endpoint.substring(1);
    }

    if (endpoint.endsWith("/")) {
      endpoint = endpoint.slice(0, -1)
    }
    return endpoint;
  }
}
