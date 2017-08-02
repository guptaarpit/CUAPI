const AuthenticationController = require('../controllers/authentication');
const UserController = require('../controllers/user');
const BenchMarkController = require('../controllers/benchmark');
const DashboardController = require('../controllers/dashboard');
const express = require('express');
const multer = require('multer');
const passport = require('passport');
const PassportService = require('../config/passport');


const storage = multer.diskStorage(
  {
    destination: './uploads/',
    filename(req, file, cb) {
      // req.body is empty... here is where req.body.new_file_name doesn't exists
      cb(null, file.originalname);
    }
  }
);

const upload = multer({ storage });

const ROLE_ADMIN = 'premium';


let User;


module.exports = (app, models) => {
  User = models.users;
// Middleware to require login/auth

  PassportService(User);
  passport.authenticate('jwt', { session: false });
  // Initializing route groups
  const apiRoutes = express.Router();
  const authRoutes = express.Router();
  const userRoutes = express.Router();
  const userController = new UserController(User, models.tediousSequelize);
  const dashboardController = new DashboardController(models);
  const benchMarkController = new BenchMarkController(models);
  /* chatRoutes = express.Router(),
   payRoutes = express.Router(),
   communicationRoutes = express.Router();*/

  //= ========================
  // Auth Routes
  //= ========================

  // Set auth routes as subgroup/middleware to apiRoutes
  apiRoutes.use('/auth', authRoutes);

  if (userController) {
    // Registration route
    authRoutes.post('/register', UserController.register);

    // Login route
    authRoutes.post('/login', UserController.login);

    // Password reset request route (generate/send token)
    authRoutes.post('/forgot-password', UserController.forgotPassword);

    // Password reset route (change password using token)
    authRoutes.post('/reset-password/:token', UserController.verifyToken);

    userRoutes.post('/uploaddata/:tableName', AuthenticationController.roleAuthorization(User, ROLE_ADMIN), upload.any(), UserController.uploadData);

    userRoutes.post('/executequery/', AuthenticationController.roleAuthorization(User, ROLE_ADMIN), UserController.executeQuery);
  }

  //= ========================
  // User Routes
  //= ========================

  // Set user routes as a subgroup/middleware to apiRoutes
  apiRoutes.use('/user', userRoutes);

  if (benchMarkController) {
    userRoutes.get('/benchmark?', BenchMarkController.retrieveBenchMarkData);
    userRoutes.get('/benchmark/:cunumber', BenchMarkController.retrieveOtherCUBenchMarkData);
    userRoutes.get('/benchmark/:state', BenchMarkController.retrieveStateWiseBenchMarkData);
  }

  if (dashboardController) {
    userRoutes.get('/cunames', DashboardController.retrieveCuList);
    userRoutes.get('/dashboard?', DashboardController.retrieveDashboardData);
    userRoutes.get('/metrics', DashboardController.retrieveMetrics);
  }
  //= ========================
  // Chat Routes
  //= ========================

  /* // Set chat routes as a subgroup/middleware to apiRoutes
   apiRoutes.use('/chat', chatRoutes);

   // View messages to and from authenticated user
   chatRoutes.get('/', requireAuth, BenchController.getConversations);

   // Retrieve single conversation
   chatRoutes.get('/:conversationId', requireAuth, BenchController.getConversation);

   // Send reply in conversation
   chatRoutes.post('/:conversationId', requireAuth, BenchController.sendReply);

   // Start new conversation
   chatRoutes.post('/new/:recipient', requireAuth, BenchController.newConversation);*/

  // Set url for API group routes
  app.use('/api', apiRoutes);
};
