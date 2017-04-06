export class Car {
    id: number;
    brandName: string;
    model: string;
    description: string;
    image: string;
    engineCap: number;
    likes: number;
    liked: boolean;

    constructor(id: number, brandName: string, model: string, description: string,  image: string, engineCap: number, likes: number, liked?: boolean) {
        this.id = id;
        this.brandName = brandName;
        this.model = model;
        this.description = description;
        this.image = image;
        this.engineCap = engineCap;
        this.likes = likes;
        this.liked = liked;
    }
    public carFullName() {
        return `${this.brandName} ${this.model}`;
    }
}