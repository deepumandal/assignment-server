import { Request, Response } from "express";
import { ServerResponse } from "../../utils/ResponseSchema";
import { Brands, Categories, SubCategory } from "../../utils/constants";
import ProductModel from "../../modals/products";

interface RequstBodyI {
  category?: keyof typeof Categories;
  subcategory?: keyof typeof SubCategory;
  brand?: keyof typeof Brands;
  averageRating?: number;
  avgtype?: "gt" | "lte";
  name?: string;
  querry?: string;
  minPrice?: number;
  maxPrice?: number;
  _id?: string;
}

const FilterProductsToDB = async (req: Request, res: Response) => {
  try {
    const {
      avgtype,
      category,
      subcategory,
      brand,
      averageRating,
      name,
      querry,
      maxPrice,
      minPrice,
      _id,
    }: RequstBodyI = req.body;

    const query: any = {};

    if (_id) query._id = _id;
    if (category) query.category = category;
    if (subcategory) query.subcategory = subcategory;
    if (brand) query.brand = brand;
    if (name) query.name = name;

    if (averageRating !== undefined && avgtype) {
      if (avgtype === "gt") {
        query.averageRating = { $gt: averageRating };
      } else if (avgtype === "lte") {
        query.averageRating = { $lte: averageRating };
      }
    }

    if (querry) {
      query.description = { $regex: querry, $options: "i" };
    }

    if (minPrice !== undefined) {
      query.price = { ...query.price, $gte: minPrice };
    }

    if (maxPrice !== undefined) {
      query.price = { ...query.price, $lte: maxPrice };
    }

    const result = await ProductModel.find(query).limit(20);
    return ServerResponse.sendResponse({
      message: "Data successfully Fetched",
      res,
      status: true,
      statusCode: 200,
      data: result,
    });
  } catch (error) {
    return ServerResponse.InternalServerError(res);
  }
};

export default FilterProductsToDB;
