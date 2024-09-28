import { Router } from 'express';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { CourseRoutes } from '../modules/Course/course.route';


import { semesterRegistrationRoutes } from '../modules/SemesterRegistration/semesterRegistration.route';
import { StudentRoutes } from '../modules/Student/student.route';
import { UserRoutes } from '../modules/User/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
 
  {
    path: '/admins',
    route: AdminRoutes,
  },
 
 
  
  {
    path: '/courses',
    route: CourseRoutes,
  },
  {
    path: '/semester-registrations',
    route: semesterRegistrationRoutes,
  },

  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/enrolled-courses',
    route: EnrolledCourseRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
