const Flashcard = require('../Model/Card'); 
 
const getAllCards= async (req, res) => {
    const flashcards = await Flashcard.find(); 
    res.status(200).json(flashcards);
};
const  getCardsByCategory= async (req, res) => {
    const { category } = req.params;
    const flashcards = await Flashcard.find({ category }); // Filtre les flashcards par catégorie
    res.status(200).json(flashcards);
};
const createCard= async (req, res) => {
    const { question, answer, category } = req.body;
    const newCard = new Flashcard({ question, answer, category });
    await newCard.save(); 
    res.status(201).json(newCard);
};
const updateCard= async (req, res) => {
    const { id } = req.params;
  const { question, answer, category } = req.body;
    const updatedCard = await Flashcard.findByIdAndUpdate(
      id,
      { question, answer, category, modifiedAt: Date.now() }, // Met à jour les champs de la flashcard
      { new: true } // Retourne la flashcard mise à jour
    );
    res.status(200).json(updatedCard);
};
const deleteCard= async (req, res) => {
    const { id } = req.params;
    const deletedCard = await Flashcard.findByIdAndDelete(id); // Supprime la flashcard par ID
    res.status(200).json({ message: "Flashcard supprimée avec succès" });
};




module.exports = {getAllCards, getCardsByCategory, createCard, updateCard, deleteCard};