export class Car {
    id: number;
    brandName: string;
    model: string;
    description: string;
    image: string;
    engineCap: number;
  
    constructor(id: number, brandName: string, model: string, description: string,  image: string, engineCap: number) {
        this.id = id;
        this.brandName = brandName;
        this.model = model;
        this.description = description;
        this.image = image;
        this.engineCap = engineCap;
    }
    public carFullName() {
        return `${this.brandName} ${this.model}`;
    }
}