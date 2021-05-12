import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<{
        productName: string;
        productImage: string;
    } & import("./entities/product.entity").Product>;
    createBulk(): Promise<import("typeorm").InsertResult>;
    findAll(page?: number, size?: number): Promise<{
        totalItems: number;
        data: import("./entities/product.entity").Product[];
        currentPage: number;
        totalPages: number;
    }>;
    findByQuery(query: string): Promise<{
        totalItems: number;
        data: import("./entities/product.entity").Product[];
    }>;
    findOne(id: string): Promise<import("./entities/product.entity").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
