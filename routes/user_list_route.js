// import methods
const { createUser, getUsers, getUserById, updateUser, deleteUser, login } = require("../controllers/user_list_controller.js");
const router = require("express").Router();

// routers
/**
 * @swagger
 * /users:
 *  post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: To create a new user.
 *         required: true
 *         schema:
 *          type: object
 *     responses:
 *      200:
 *          description: The user was successfully created
 *      400:
 *          description: The user was not created
 *      500:
 *          description: The server was not able to create the user
 * definitions:
 *  User:
 *    type: object
 *    properties:
 *      username:
 *          type: string
 *          description: The username of the user
 *      user_type:
 *          type: string
 *          description: The type of user
 *      email_address:
 *          type: string
 *          description: The email address of the user
 *      phone:
 *          type: string
 *          description: The phone number of the user
 *      address:
 *          type: string
 *          description: The address of the user
 *      apartment_no:
 *          type: string
 *          description: The apartment number of the user
 *      fcm_token:
 *          type: string
 *          description: The fcm token of the user
 *      gender:
 *          type: string
 *          description: The gender of the user
 *      image_url:
 *           type: string
 *           description: The image url of the user
 *      user_password:
 *           type: string
 *           description: The password of the user
 *    required:
 *     - username
 *     - user_type
 *     - email_address
 *     - phone
 *     - address
 *     - user_password
 */
router.post("/", createUser);
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of all users
 *     tags:
 *       - Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of users
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/User'
 *       500:
 *         description: Internal server error
 *
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       user_id:
 *         type: integer
 *         description: The user ID.
 *       username:
 *         type: string
 *         description: The username.
 *       email_address:
 *         type: string
 *         description: The email address.
 *     required:
 *       - user_id
 *       - username
 *       - email_address
 */
router.get("/", getUsers);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve user by id
 *     tags:
 *       - Users
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The user id
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single user object
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/User'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 *
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       user_id:
 *         type: integer
 *         description: The user ID.
 *       username:
 *         type: string
 *         description: The username.
 *       email_address:
 *         type: string
 *         description: The email address.
 *     required:
 *       - user_id
 *       - username
 *       - email_address
 */
router.get("/:id", getUserById);
/**
 * @swagger
 * /users:
 *   put:
 *     summary: Update a user by id
 *     tags:
 *      - Users
 *     description: Update a user's data in the database by id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_id
 *             properties:
 *               user_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: User data updated successfully
 *       400:
 *         description: Invalid request body
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.put("/", updateUser);
/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    summary: Delete a user by id
 *    tags:
 *     - Users
 *    produces:
 *     - application/json
 *    parameters:
 *     - name: id
 *       in: path
 *       description: The user id
 *       required: true
 *       schema: 
 *          type: integer
 *    responses:
 *      200:
 *         description: The user was successfully deleted
 *      400:
 *         description: The user was not deleted
 *      500:
 *         description: The server was not able to delete the user
 */
router.delete("/:id", deleteUser);
/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Logs a user in and returns a JSON Web Token (JWT)
 *     tags:
 *      - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email address
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: Password123
 *     responses:
 *       200:
 *         description: Login successful, returns JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JSON Web Token (JWT)
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
router.post("/login", login);

// export router
module.exports = router;