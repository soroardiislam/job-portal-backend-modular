import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route.js";
import { JobRoutes } from "../modules/job/job.route.js";
import { CompanyRoutes } from "../modules/company/company.route.js";
import { ApplicationRoutes } from "../modules/application/application.route.js";




const router = Router();

const moduleRoutes = [
    {
        path: "/user",
        route: UserRoutes
    },
     {
        path: "/job",
        route: JobRoutes
    },
    {
        path: "/company",
        route:  CompanyRoutes
    },
     {
        path: "/application",
        route: ApplicationRoutes
    }

]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;