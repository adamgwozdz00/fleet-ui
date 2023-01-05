import {CsvToVehicleFactory} from "./csv-to-vehicle.factory";
import {CSV} from "../importer/csv";

describe("csv to vehicle strategy test", () => {
  const instance = new CsvToVehicleFactory();


  it('should transform csv to vehicle', function () {
    // given
    const csv = CSV.of("make, model,productionYear ,vinNumber,fuelType\n"
      + "Ford,Focus, 2022,3N1BC13E07L319265,DIESEL\n"
      + "Skoda,Octavia ,2021,1FALP4044SF124278, GASOLINE")

    // when
    const result = instance.create(csv);

    expect(result.length).toBe(2);
    expect(result[0]).toEqual({
      make: "Ford",
      model: "Focus",
      productionYear: 2022,
      vinNumber: "3N1BC13E07L319265",
      fuelType: "DIESEL"
    })
    expect(result[1]).toEqual({
      make: "Skoda",
      model: "Octavia",
      productionYear: 2021,
      vinNumber: "1FALP4044SF124278",
      fuelType: "GASOLINE"
    })
  });

  it('should throw exception when header incorrect', function () {
    // given
    const csv = CSV.of("Ford,Focus, 2022,3N1BC13E07L319265,DIESEL\n"
      + "Skoda,Octavia ,2021,1FALP4044SF124278, GASOLINE")

    // when
    expect(() => instance.create(csv)).toThrow(new Error("Incorrect csv header."));
  });

  it('should throw exception when header have incorrect values', function () {
    // given
    const csv = CSV.of("size, width,productionYear ,vinNumber,fuelType\n" +
      "Ford,Focus, 2022,3N1BC13E07L319265,DIESEL\n"
      + "Skoda,Octavia ,2021,1FALP4044SF124278, GASOLINE")

    // when
    expect(() => instance.create(csv)).toThrow(new Error("Incorrect csv header."));
  });
})
