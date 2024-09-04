const express = require("express")
const router = express.Router()
const {getAllCards, getCardsByCategory, createCard, updateCard, deleteCard }= require("../Controllers/FlashCardcontrollers");
router.route("/flashcards").get(getAllCards); // pour recuperer tout les flashcards
router.route('/flashcards/category/:category').get(getCardsByCategory);//recuperer les flashcars par category
router.route('/flashcards').post(createCard); // creer un nouvel flashcard
router.route('/flashcards/:id').put(updateCard); // modifier un flashcard
router.route('/flashcards/:id').delete(deleteCard); //supprimer un flash card
module.exports = router;