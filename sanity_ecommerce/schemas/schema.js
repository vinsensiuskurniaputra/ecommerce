import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import { product, banner } from "./";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([product, banner]),
});
