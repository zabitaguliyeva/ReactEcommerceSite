const express = require("express");
const Joi = require("joi");
const app = express();
const cors = require("cors");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

/*********MIDDLEWARE**********/

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

/*********ROUTES**********/

const products = [
  {
    id: "1",
    name: "LARQ Bottle PureVis™",
    discount: 20,
    price: 100,
    details:
      "The LARQ Bottle PureVis™ is the world's first self-cleaning water bottle and water purification system. It uses PureVis technology to eliminate up to 99%* of bio-contaminants such as E. coli from your water and bottle. *Based on elimination 99.8% of E.coli in a 20-second cycle for all LARQ Bottles.",
    featured: true,
    images: [
      "uploads/product11.png",
      "uploads/product12.png",
      "uploads/product13.png",
      "uploads/product14.png",
    ],
  },
  {
    id: "2",
    name: "LARQ Pitcher PureVis™",
    discount: 20,
    price: 139,
    details:
      "LARQ Pitcher PureVis™ is the world's first self-cleaning water bottle and water purification system. It uses PureVis technology to eliminate up to 99%* of bio-contaminants such as E. coli from your water and bottle. *Based on elimination 99.8% of E.coli in a 20-second cycle for all LARQ Bottles.",
    featured: true,
    images: [
      "uploads/product21.png",
      "uploads/product22.png",
    ],
  },
  {
    id: "3",
    name: "LARQ Bottle Swig Top",
    discount: undefined,
    price: 39,
    details:
      "LARQ Bottle Swig Top is the world's first self-cleaning water bottle and water purification system. It uses PureVis technology to eliminate up to 99%* of bio-contaminants such as E. coli from your water and bottle. *Based on elimination 99.8% of E.coli in a 20-second cycle for all LARQ Bottles.",
    featured: true,
    images: [
      "uploads/product31.png",
      "uploads/product32.png",
      "uploads/product33.png",
    ],
  },
  {
    id: "4",
    name: "LARQ Bottle Filtered",
    price:50,
    discount: 10,
    details:
      "LARQ Bottle Filtered is the world's first self-cleaning water bottle and water purification system. It uses PureVis technology to eliminate up to 99%* of bio-contaminants such as E. coli from your water and bottle. *Based on elimination 99.8% of E.coli in a 20-second cycle for all LARQ Bottles.",

    featured: true,

    images: [
      "uploads/product41.png",
      "uploads/product42.png",
    ],
  },
  {
    id: "5",
    name: "LARQ Bottle Flip Top",
    discount: 15,
    price: 39.95,
    discount: undefined,
    details:
      "LARQ Bottle Flip Top is the world's first self-cleaning water bottle and water purification system. It uses PureVis technology to eliminate up to 99%* of bio-contaminants such as E. coli from your water and bottle. *Based on elimination 99.8% of E.coli in a 20-second cycle for all LARQ Bottles",

    featured: true,
    images: [
      "uploads/product51.png",
      "uploads/product52.png",
      "uploads/product53.png",
    ],
  },
  {
    id: "6",
    name: "LARQ Bottle Twist Top",
    discount:undefined,
    price: 29.95,
    details:
      "LARQ Bottle Twist Top is the world's first self-cleaning water bottle and water purification system. It uses PureVis technology to eliminate up to 99%* of bio-contaminants such as E. coli from your water and bottle. *Based on elimination 99.8% of E.coli in a 20-second cycle for all LARQ Bottles",

    featured: true,

    images: [
      "uploads/product61.png",
      "uploads/product62.png",
      "uploads/product63.png",
      "uploads/product64.png",
    ],
  },
];

/***********************************************************/
/********* GET: ALL PRODUCTS **********/
/***********************************************************/

app.get("/api/products", (req, res) => {
  res.send(products);
});

/***********************************************************/
/********* GET: SINGLE PRODUCT **********/
/***********************************************************/

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    return res.status(404).send("Product with given id was not found");
  }
  res.send(product);
});

/***********************************************************/
/********* POST: ADD PRODUCT **********/
/***********************************************************/

app.post("/api/products", upload.array("images"), (req, res) => {
  const imagePaths=req.files.map(file=>file.path)
  //validate product
  const { error } = validateProduct({
    ...req.body,
   images: imagePaths,
  });

  if (error) return res.status(400).send(error);

  const product = {
    id: uuidv4(),
    name: req.body.name,
    details: req.body.details,
    price: req.body.price,
    discount: req.body.discount,

    featured: req.body.featured,
  images: imagePaths,
  };

  products.push(product);
  res.send(product);
});

/***********************************************************/
/********* PUT: UPDATE PRODUCT **********/
/***********************************************************/

app.put("/api/products/:id", upload.array("images"), (req, res) => {
  //Find product
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    return res.status(404).send("Product with given id was not found");
  }
  const imagePaths=req.files.map((file)=>file.path);

  const { error } = validateUpdateProduct({
    ...req.body,
  });

  if (error) return res.status(400).send(error);

  product.name = req.body.name;
  product.details = req.body.details;
  product.price = req.body.price;
  product.discount = req.body.discount;

  product.featured = req.body.featured;
  if (req.files.length>0) {
    product.images = imagePaths;
  }

  res.send(product);
});

/***********************************************************/
/********* DELETE: DELETE PRODUCT **********/
/***********************************************************/

app.delete("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  if (!product) {
    return res.status(404).send("Product with given id was not found");
  }
  const index = products.indexOf(product);
  products.splice(index, 1);

  res.send(products);
});

function validateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    details: Joi.string().min(3).max(200).required(),
    price: Joi.number().required(),
    discount: Joi.number(),

    featured: Joi.boolean().required(),
    images: Joi.any().required(),
  });

  return schema.validate(product);
}

function validateUpdateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    details: Joi.string().min(3).max(200).required(),
    price: Joi.number().required(),
    discount: Joi.number(),

    featured: Joi.boolean().required(),
    images: Joi.any(),
  });

  return schema.validate(product);
}

/********* PORT **********/
//To set PORT run set/export PORT=YOUR_VALUE
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
