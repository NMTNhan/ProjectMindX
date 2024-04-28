
import express from "express";
export const userRouter = express.Router();
import { vendorRouter } from "./vendor.js";
import { customerRouter } from "./customer.js";

// Checking userTypes
// The three middleware below is used to restrict access for each user type to their respective routes only 

const checkCustomer = (req, res, next) => {
    const userType = res.locals.userType
    if (userType !== "Customer") {
        res.status(403).send("You do not have access to this resource")
    } else {
        next()
    }
}

const checkVendor = (req, res, next) => {
    const userType = res.locals.userType
    if (userType !== "Vendor") {
        res.status(403).send("You do not have access to this resource")
    } else {
        next()
    }
}


// Customer route
userRouter.use("/customer", checkCustomer, customerRouter)

// Vendor route
userRouter.use("/vendor", checkVendor, vendorRouter)
